import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditProductItemById, UpdateProductItemInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormProductItem = NonNullable<EditProductItemById['productItem']>

interface ProductItemFormProps {
  productItem?: EditProductItemById['productItem']
  onSave: (data: UpdateProductItemInput, id?: FormProductItem['id']) => void
  error: RWGqlError
  loading: boolean
}

const ProductItemForm = (props: ProductItemFormProps) => {
  const onSubmit = (data: FormProductItem) => {
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.productItem?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormProductItem> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="productId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Product id
        </Label>
        
          <TextField
            name="productId"
            defaultValue={props.productItem?.productId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="productId" className="rw-field-error" />

        <Label
          name="quantity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quantity
        </Label>
        
          <NumberField
            name="quantity"
            defaultValue={props.productItem?.quantity}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="quantity" className="rw-field-error" />

        <Label
          name="shoppingCartId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Shopping cart id
        </Label>
        
          <TextField
            name="shoppingCartId"
            defaultValue={props.productItem?.shoppingCartId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="shoppingCartId" className="rw-field-error" />

        <Label
          name="orderId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Order id
        </Label>
        
          <TextField
            name="orderId"
            defaultValue={props.productItem?.orderId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="orderId" className="rw-field-error" />

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

export default ProductItemForm
