export class SatoshiConsensus {
  constructor(privateKey, publicLedger) {
    this.privateKey = privateKey;
    this.publicLedger = publicLedger;
  }

  validateTransaction(action, signature) {
    const intentHash = action?.intention ? '0x' + action.intention.length.toString(16) : '0x0';
    return !!signature && signature.startsWith('0x') && intentHash !== '0x0';
  }

  proofOfWork() {
    const target = 2n ** 256n / 1000n;
    let nonce = 0n;

    while (nonce < 1000n) {
      const randomHex = Array.from({length: 64}, () => Math.floor(Math.random() * 16).toString(16)).join('');
      const hashResult = BigInt('0x' + randomHex);

      if (hashResult < target) {
        return nonce;
      }
      nonce++;
    }
    return nonce;
  }
}
