import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'

import type { EditOrderById, UpdateOrderInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormOrder = NonNullable<EditOrderById['order']>

interface OrderFormProps {
  order?: EditOrderById['order']
  onSave: (data: UpdateOrderInput, id?: FormOrder['id']) => void
  error: RWGqlError
  loading: boolean
}

const OrderForm = (props: OrderFormProps) => {
  const onSubmit = (data: FormOrder) => {
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.order?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormOrder> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="userClientId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User client id
        </Label>
        
          <TextField
            name="userClientId"
            defaultValue={props.order?.userClientId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="userClientId" className="rw-field-error" />

        <Label
          name="totalPrice"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total price
        </Label>
        
          <TextField
            name="totalPrice"
            defaultValue={props.order?.totalPrice}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ valueAsNumber: true, required: true }}
          />
        

        <FieldError name="totalPrice" className="rw-field-error" />

        <Label
          name="status"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status
        </Label>
        
          
          
        <div className="rw-check-radio-items">
          <RadioField
            id="order-status-0"
            name="status"
            defaultValue="new"
            defaultChecked={props.order?.status?.includes('new')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            New
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="order-status-1"
            name="status"
            defaultValue="hold"
            defaultChecked={props.order?.status?.includes('hold')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Hold
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="order-status-2"
            name="status"
            defaultValue="shipped"
            defaultChecked={props.order?.status?.includes('shipped')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Shipped
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="order-status-3"
            name="status"
            defaultValue="delivered"
            defaultChecked={props.order?.status?.includes('delivered')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Delivered
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="order-status-4"
            name="status"
            defaultValue="cancelled"
            defaultChecked={props.order?.status?.includes('cancelled')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Cancelled
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="order-status-5"
            name="status"
            defaultValue="rejected"
            defaultChecked={props.order?.status?.includes('rejected')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Rejected
          </div>
        </div>
          
        

        <FieldError name="status" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default OrderForm
