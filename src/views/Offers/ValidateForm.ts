import type { Ref } from 'vue'

export const validateForm = (formData: Ref<any>, errors: Ref<any>) => {
  if (formData.value.mls === '') {
    errors.value.mls = 'MLS is required'
  } else {
    errors.value.mls = ''
  }
  if (formData.value.buyers.length === 0) {
    errors.value.buyers = 'Buyers are required'
  } else {
    errors.value.buyers = ''
  }
  if (formData.value.offerDate === '') {
    errors.value.offerDate = 'Offer Date is required'
  } else {
    errors.value.offerDate = ''
  }
  if (formData.value.seller === '') {
    errors.value.seller = 'Seller is required'
  } else {
    errors.value.seller = ''
  }
  if (formData.value.purchasePrice === 0) {
    errors.value.purchasePrice = 'Purchase Price is required'
  } else {
    errors.value.purchasePrice = ''
  }
  if (formData.value.depositAmount === 0) {
    errors.value.depositAmount = 'Deposit Amount is required'
  } else {
    errors.value.depositAmount = ''
  }
  if (formData.value.depositTerms === '') {
    errors.value.depositTerms = 'Deposit Terms is required'
  } else {
    errors.value.depositTerms = ''
  }
  if (formData.value.irrevocableDate === '') {
    errors.value.irrevocableDate = 'Irrevocable Date is required'
  } else {
    errors.value.irrevocableDate = ''
  }
  if (formData.value.completionDate === '') {
    errors.value.completionDate = 'Completion Date is required'
  } else {
    errors.value.completionDate = ''
  }
}
