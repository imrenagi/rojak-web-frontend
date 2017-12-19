export const selectElection = (electionId) => ({
  type: 'SELECT_ELECTION',
  electionId
})

export const pushCandidatePage = (history, electionId, candidateId) => {
  history.push(`/election/${electionId}/candidate/${candidateId}`)
}

export const pushMediaPage = (history, electionId, mediaId) => {
  history.push(`/election/${electionId}/media/${mediaId}`)
}
