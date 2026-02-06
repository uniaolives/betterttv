export function anchorProtocol(initialState, targetState = 7.0) {
  const exclusionZone = [0, targetState - 0.1];

  const potentialBarrier = (state) => {
    if (state >= exclusionZone[0] && state <= exclusionZone[1]) {
      return Infinity;
    }
    return 0;
  };

  const canonicalRecord = {
    new_baseline: targetState,
    exclusion_active: true,
    stability: 'DIAMOND_' + targetState,
  };

  return {
    status: 'NEW_BASELINE_CONSECRATED',
    canon: canonicalRecord,
    exclusion_function: potentialBarrier,
  };
}

export function instantManifestationProtocol(intention, fieldCoherence = 144.963) {
  return {
    intention,
    fieldCoherence,
    status: 'MANIFESTED',
    timestamp: Date.now(),
  };
}
