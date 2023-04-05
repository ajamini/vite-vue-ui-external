import type { Ref } from 'vue'

export const validateForm = (formData: Ref<any>, errors: Ref<any>, fieldsToValidate: string[]) => {
  fieldsToValidate.forEach((field) => {
    switch (field) {
      case 'mls':
        if (formData.value.mls === '') {
          errors.value.mls = 'MLS is required'
        } else {
          errors.value.mls = ''
        }
        break
      case 'buyers':
        if (formData.value.buyers.length === 0) {
          errors.value.buyers = 'Buyers are required'
        } else {
          errors.value.buyers = ''
        }
        break
      case 'offerDate':
        if (formData.value.offerDate === '') {
          errors.value.offerDate = 'Offer Date is required'
        } else {
          errors.value.offerDate = ''
        }
        break
      case 'seller':
        if (formData.value.seller === '') {
          errors.value.seller = 'Seller is required'
        } else {
          errors.value.seller = ''
        }
        break
      case 'purchasePrice':
        if (formData.value.purchasePrice === 0) {
          errors.value.purchasePrice = 'Purchase Price is required'
        } else {
          errors.value.purchasePrice = ''
        }
        break
      case 'depositAmount':
        if (formData.value.depositAmount === 0) {
          errors.value.depositAmount = 'Deposit Amount is required'
        } else {
          errors.value.depositAmount = ''
        }
        break
      case 'depositTerms':
        if (formData.value.depositTerms === '') {
          errors.value.depositTerms = 'Deposit Terms is required'
        } else {
          errors.value.depositTerms = ''
        }
        break
      case 'irrevocableDate':
        if (formData.value.irrevocableDate === '') {
          errors.value.irrevocableDate = 'Irrevocable Date is required'
        } else {
          errors.value.irrevocableDate = ''
        }
        break
      case 'completionDate':
        if (formData.value.completionDate === '') {
          errors.value.completionDate = 'Completion Date is required'
        } else {
          errors.value.completionDate = ''
        }
        break
    }
  })
}
