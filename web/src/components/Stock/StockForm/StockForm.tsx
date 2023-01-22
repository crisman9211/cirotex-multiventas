import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditStockById, UpdateStockInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormStock = NonNullable<EditStockById['stock']>

interface StockFormProps {
  stock?: EditStockById['stock']
  onSave: (data: UpdateStockInput, id?: FormStock['id']) => void
  error: RWGqlError
  loading: boolean
}

const StockForm = (props: StockFormProps) => {
  const onSubmit = (data: FormStock) => {
  
    
    
  
    
    
  
    props.onSave(data, props?.stock?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormStock> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
        
          <TextField
            name="description"
            defaultValue={props.stock?.description}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="slug"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Slug
        </Label>
        
          <TextField
            name="slug"
            defaultValue={props.stock?.slug}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="slug" className="rw-field-error" />

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

export default StockForm
