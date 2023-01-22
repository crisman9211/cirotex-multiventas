import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

import type { EditShoppingCartById, UpdateShoppingCartInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormShoppingCart = NonNullable<EditShoppingCartById['shoppingCart']>

interface ShoppingCartFormProps {
  shoppingCart?: EditShoppingCartById['shoppingCart']
  onSave: (data: UpdateShoppingCartInput, id?: FormShoppingCart['id']) => void
  error: RWGqlError
  loading: boolean
}

const ShoppingCartForm = (props: ShoppingCartFormProps) => {
  const onSubmit = (data: FormShoppingCart) => {
  
    
    
  
    
    
  
    props.onSave(data, props?.shoppingCart?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormShoppingCart> onSubmit={onSubmit} error={props.error}>
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
            defaultValue={props.shoppingCart?.userClientId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="userClientId" className="rw-field-error" />

        <Label
          name="isAvailable"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is available
        </Label>
        
          <CheckboxField
            name="isAvailable"
            defaultChecked={props.shoppingCart?.isAvailable}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="isAvailable" className="rw-field-error" />

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

export default ShoppingCartForm
