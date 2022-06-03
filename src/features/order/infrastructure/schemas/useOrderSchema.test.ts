import { describe, it, expect } from 'vitest'
import { getNewAddress } from '../../domain/Address'
import { getNewContact } from '../../domain/Contact'
import { getNewOrder } from '../../domain/Order'
import useOrderSchema from './useOrderSchema'

const contactMock = getNewContact({
  gender: 'male',
  firstName: 'John',
  lastName: 'Doe',
  wantsNewsletter: false,
  email: 'john@doe.com'
})

const constAddressMock = getNewAddress({
  postalCode: '1234',
  city: 'Big City',
  street: 'Main street',
  streetNumber: '12'
})

describe('Service: Schema Order', () => {
  it('should throw an error if form is empty', async () => {
    const schema = useOrderSchema()
    expect(() => schema.validateSync(getNewOrder())).toThrowError()
  })

  it('should pass with correct form value', async () => {
    const schema = useOrderSchema()
    schema.validateSync(
      getNewOrder({
        contact: contactMock,
        deliveryAddress: constAddressMock
      })
    )
  })
})
