import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditStockProductById, UpdateStockProductInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormStockProduct = NonNullable<EditStockProductById['stockProduct']>

interface StockProductFormProps {
  stockProduct?: EditStockProductById['stockProduct']
  onSave: (data: UpdateStockProductInput, id?: FormStockProduct['id']) => void
  error: RWGqlError
  loading: boolean
}

const StockProductForm = (props: StockProductFormProps) => {
  const onSubmit = (data: FormStockProduct) => {
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.stockProduct?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormStockProduct> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="stockId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Stock id
        </Label>
        
          <TextField
            name="stockId"
            defaultValue={props.stockProduct?.stockId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="stockId" className="rw-field-error" />

        <Label
          name="quantity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quantity
        </Label>
        
          <NumberField
            name="quantity"
            defaultValue={props.stockProduct?.quantity}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="quantity" className="rw-field-error" />

        <Label
          name="productId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Product id
        </Label>
        
          <TextField
            name="productId"
            defaultValue={props.stockProduct?.productId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="productId" className="rw-field-error" />

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

export default StockProductForm
