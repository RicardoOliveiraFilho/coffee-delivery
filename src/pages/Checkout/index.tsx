/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

import { useCart } from '../../hooks/useCart'

import { CheckoutContainer } from './styles'

import { CheckoutForm } from './components/CheckoutForm'
import { SelectedCoffees } from './components/SelectedCoffees'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmCheckoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return {
        message: 'Informe o método de pagamento',
      }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmCheckoutFormValidationSchema>

type ConfirmCheckoutFormData = OrderData

export function CheckoutPage() {
  const checkoutForm = useForm<ConfirmCheckoutFormData>({
    resolver: zodResolver(confirmCheckoutFormValidationSchema),
  })

  const { handleSubmit } = checkoutForm

  const navigate = useNavigate()

  const { cleanCart } = useCart()

  function handleConfirmCheckoutForm(data: ConfirmCheckoutFormData) {
    navigate('/success', {
      state: data,
    })

    cleanCart()
  }

  return (
    <FormProvider {...checkoutForm}>
      <CheckoutContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmCheckoutForm)}
      >
        <CheckoutForm />
        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  )
}
