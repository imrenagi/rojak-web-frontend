import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import * as d3 from 'd3'

import './HorizontalBarChart.css'

export default class HorizontalBarChart extends React.Component {
    static displayName = 'HorizontalBarChart';
    static propTypes = {
      chartData: PropTypes.object,
      itemNames: PropTypes.array,
      itemColors: PropTypes.array,
      options: PropTypes.object
    };

    constructor (props) {
      super(props)

      this.chartData = props.chartData

      // the default width and height should be changed to fit your needs
      const defaultOptions = {
        width:  1400,
        height: 350,
        titleHeight: 75,
        barHeight: 50,
        cornerRadius: 10
      }

      // default value for itemNames, itemColors, and options
      this.itemNames = props.itemNames || ['positif', 'netral', 'negatif']
      this.itemColors = props.itemColors || ['#87D37C', '#81CFE0', '#F2784B']
      this.options = props.options || defaultOptions
    }

    componentWillMount () {
      // generate guid for this bar chart
      // so d3 can target the correct svg
      this.guid = _.uniqueId('hbc-')
    }

    componentDidMount () {
      this.setupBarChart()
    }

    render () {
      return (
        <svg className={`horizontal-bar-chart ${this.guid}`}
          width={this.options.width}
          height={this.options.height} />
      )
    }

    setupBarChart () {
      this.svg = d3.select(`svg.${this.guid}`)

      let margins = { top: 20, left: 100, bottom: 30, right: 20 }
      // let innerWidth = this.options.width - margins.left - margins.right
      // let innerHeight = this.options.height - margins.top - margins.bottom

      let chartTitle = this.chartData.short_name

      let posNews = this.chartData.statistic.total_pos_news
      let neutNews = this.chartData.statistic.total_neutral_news
      let negNews = this.chartData.statistic.total_neg_news

      let grandTotalVal = this.chartData.statistic.total_news

      let yAxisItems = [
        {
          name: 'negatif',
          value: negNews,
          color: this.itemColors[2]
        },
        {
          name: 'netral',
          value: neutNews,
          color: this.itemColors[1]
        },
        {
          name: 'positif',
          value: posNews,
          color: this.itemColors[0]
        },
      ]

      let chartHeight = yAxisItems.length * 1.5 * this.options.barHeight

      // clone so the actual array isn't sorted
      let maxVal = _.clone(yAxisItems).sort((a, b) => {
        return a.value < b.value
      })[0].value

      let xScale = d3.scaleLinear()
        .domain([0, 100])
        .range([0, grandTotalVal])

      let yScale = d3.scaleBand()
        .domain(yAxisItems.map((d) => d.name))
        .range([chartHeight, 0])

        // chart title
      this.svg.append('g')
        .attr('class', 'title')
        .append('rect')
        .attr('transform', `translate(0, ${margins.top})`)
        .attr('width', maxVal + margins.left + margins.right)
        .attr('height', this.options.titleHeight)
        .attr('fill', '#BDC3C7')

      d3.select(`svg.${this.guid} .title`)
        .append('text')
        .attr('class', 'title-text')
        .attr('transform', `translate(0, ${margins.top + this.options.titleHeight / 2})`)
        .text(`total berita ${chartTitle} : ${grandTotalVal}`)
        .attr('width', this.options.width)
        .attr('height', this.options.titleHeight)
        .attr('x', 25)
        .attr('y', margins.top / 2)
        .attr('fill', '#fff')

      let chartGroup = this.svg.append('g')
        .attr('transform', `translate(${margins.left}, ${margins.top + this.options.titleHeight})`)

        // x axis
      chartGroup.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0, ${chartHeight})`)
        .call(d3.axisBottom(xScale))

        // y axis
      chartGroup.append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(yScale))

        // tooltip
      let tooltip = d3.select('body')
        .append('div')
        .attr('class', 'tooltip')

        // bars
      chartGroup.selectAll('.bar')
        .data(yAxisItems)
        .enter()
        .append('path')
        .attr('class', 'bar')
        .attr('d', d => {
          // this creates the rounded edges on the bar
          let w = d.value
          let centerOffset = this.options.barHeight / 4
          let yMin = yScale(d.name) + centerOffset
          let yMax = yMin + this.options.barHeight
          let r = this.options.cornerRadius

          /* explanation of d attr:
                 * 1. Move to bottom left corner of bar
                 * 2. Draw horizontal line to width - cornerRadius
                 * 3. Draw bezier curve to x = width, y = height - cornerRadius
                 * 4. Draw vertical line to x = width, y = cornerRadius
                 * 5. Draw bezier curve from x = width, y = cornerRadius to x = width - cornerRadius y = 0
                 * 6. Draw horizontal line to top left corner of bar
                 * 7. Close path
                 */

          return `M0,${yMax} H${w - r} Q${w},${yMax} ${w},${yMax - r} V${yMin + r} Q${w},${yMin} ${w - r},${yMin} H0 z`
        })

        .attr('width', d => xScale(d.value))
        .attr('x', 0)
        .attr('height', yScale.bandwidth())
        .attr('y', d => yScale(d.name))
        .attr('fill', d => d.color)
        .on('mousemove', function (d) {
          tooltip.classed('visible', true)

          let percentage = (d.value / grandTotalVal).toFixed(2) * 100

          tooltip.text(`${d.value} berita - ${percentage}%`)
            .style(`left`, `${d3.event.pageX + 10}px`)
            .style(`top`, `${d3.event.pageY - 10}px`)
        })
        .on('mouseout', function (d) {
          tooltip.classed('visible', false)
        })

      // bar text (percentage)
      // chartGroup.selectAll('.bar-label.percentage')
      //     .data(yAxisItems)
      //     .enter()
      //     .append('text')
      //     .attr('class', 'bar-label percentage')
      //     .attr('x', d => d.value + 75)
      //     .attr('y', d => yScale(d.name) + (this.options.barHeight))
      //     .text(d => `${(d.value / grandTotalVal).toFixed(2) * 100}%`)
      //     .attr('fill', '#000');

      // bar text (berita)
      // chartGroup.selectAll('.bar-label.berita')
      //     .data(yAxisItems)
      //     .enter()
      //     .append('text')
      //     .attr('class', 'bar-label berita')
      //     .attr('x', d => d.value - 100)
      //     .attr('y', d => yScale(d.name) + (this.options.barHeight * 0.85))
      //     .text(d => `${d.value} berita`)
      //     .attr('fill', '#fff');
    }
}
