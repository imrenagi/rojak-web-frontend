export const selectElection = (electionId) => ({
  type: 'SELECT_ELECTION',
  electionId
})

export const pushCandidatePage = (electionId, candidateId) => {
  window.location.href = '/election/' + electionId + '/candidate/' + candidateId
}

export const pushMediaPage = (electionId, mediaId) => {
  window.location.href = '/election/' + electionId + '/media/' + mediaId
}
