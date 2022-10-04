export interface SingleLineAddress {
  addressLine1: string
  addressLine2: string
  city: string
  stateProvince: string
  zipCode: string
}

export const formSingleLineAddress = (
  singleAddress: SingleLineAddress,
  includeZipCode: boolean,
) => {
  const { addressLine1, addressLine2, city, stateProvince, zipCode } =
    singleAddress || {}
  const fields = [addressLine1, addressLine2, city, stateProvince]
  const address = fields.filter((x) => x).join(', ')
  return includeZipCode ? `${address} ${zipCode}` : address
}
