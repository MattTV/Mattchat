import { WalletClient } from '@bsv/sdk'

let myId: string = ''

export default async function getMyId(): Promise<string> {

  // check if we've saved the id already
  if (!myId) {

    // get the user's MNC ID
    myId = (await new WalletClient('json-api', 'non-admin.com').getPublicKey({
      identityKey: true
    })).publicKey

  }

  return myId
}
