import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

import type { EditProductById, UpdateProductInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormProduct = NonNullable<EditProductById['product']>

interface ProductFormProps {
  product?: EditProductById['product']
  onSave: (data: UpdateProductInput, id?: FormProduct['id']) => void
  error: RWGqlError
  loading: boolean
}

const ProductForm = (props: ProductFormProps) => {
  const onSubmit = (data: FormProduct) => {
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.product?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormProduct> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        
          <TextField
            name="name"
            defaultValue={props.product?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
        
          <TextField
            name="description"
            defaultValue={props.product?.description}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="imgURL"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Img url
        </Label>
        
          <TextField
            name="imgURL"
            defaultValue={props.product?.imgURL}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="imgURL" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>
        
          <TextField
            name="price"
            defaultValue={props.product?.price}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ valueAsNumber: true, required: true }}
          />
        

        <FieldError name="price" className="rw-field-error" />

        <Label
          name="isAvailable"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is available
        </Label>
        
          <CheckboxField
            name="isAvailable"
            defaultChecked={props.product?.isAvailable}
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

export default ProductForm
