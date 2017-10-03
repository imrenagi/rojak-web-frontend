import React from 'react';

import renderer from 'react-test-renderer';

import { mount } from 'enzyme';

// I like to use chai but Jest uses jasmine expect statements
import chai from 'chai';

import VideoSection from '../VideoSection';

describe('Video Section', () => {
    describe('rendering', () => {
        it('should not render null', () => {
            // Assert
            // Mount the Component and check if it actually renders
            chai.expect(mount(<VideoSection />).html()).to.not.equal(null);
        });

        it('should render a wrapper div with className `video-section`', () => {
            // Arrange
            // Mount the component
            const wrapper = mount(<VideoSection />);
            // find the top level div with the correct className
            const wrapperDiv = wrapper
                .find('div')
                .filterWhere(div => div.prop('className').includes('wrapper'))
                .first(); // Get the first one since filterWhere returns a list

            // Assert
            chai.expect(wrapperDiv.exists()).to.be.true;
            chai.expect(wrapperDiv.prop('className').includes('video-section'))
                .to.be.true;
        });

        it('should render a title row', () => {
            // Arrange
            // Mount the component
            const wrapper = mount(<VideoSection />);

            const title = wrapper
                .find('div.row') // find all the div's with class row
                .filterWhere(div => div.prop('className').includes('title'))
                .first(); // Get the first one since filterWhere returns a list

            // Assert
            chai.expect(title.exists()).to.be.true;
            chai.expect(title.find('h1').exists()).to.be.true;
            chai.expect(title.find('h1').text()).to.equal('About Rojak');
        });

        it('should render a description', () => {
            // Arrange
            // Mount the component
            const wrapper = mount(<VideoSection />);

            const description = wrapper
                .find('div.row') // find all the div's with class row
                .filterWhere(div =>
                    div.prop('className').includes('description')
                )
                .first(); // Get the first one since filterWhere returns a list

            // Assert
            chai.expect(description.exists()).to.be.true;
            chai.expect(description.find('p').exists()).to.be.true;
            chai
                .expect(description.find('p').text())
                .to.equal('Watch this video to understand more about Rojak');
        });

        it('should render a video in an iframe', () => {
            // Arrange
            // Mount the component
            const wrapper = mount(<VideoSection />);

            const video = wrapper.find('div.video-thumbnail');

            // Assert
            chai.expect(video.exists()).to.be.true;
            chai.expect(video.find('div.container-video').exists()).to.be.true;
            chai.expect(video.find('div.embed-responsive').exists()).to.be.true;
            chai.expect(video.find('iframe').exists()).to.be.true;
            chai
                .expect(video.find('iframe').prop('src'))
                .to.equal('https://www.youtube.com/embed/3tmd-ClpJxA');
        });
    });

    describe('snapshots', () => {
        it('should match the snapshot', () => {
            // Assert
            expect(
                renderer.create(<VideoSection />).toJSON()
            ).toMatchSnapshot();
        });
    });
});
