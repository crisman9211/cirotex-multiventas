import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditUserClientById, UpdateUserClientInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormUserClient = NonNullable<EditUserClientById['userClient']>

interface UserClientFormProps {
  userClient?: EditUserClientById['userClient']
  onSave: (data: UpdateUserClientInput, id?: FormUserClient['id']) => void
  error: RWGqlError
  loading: boolean
}

const UserClientForm = (props: UserClientFormProps) => {
  const onSubmit = (data: FormUserClient) => {
  
    
    
  
    
    
  
    props.onSave(data, props?.userClient?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormUserClient> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="phoneNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone number
        </Label>
        
          <TextField
            name="phoneNumber"
            defaultValue={props.userClient?.phoneNumber}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="phoneNumber" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>
        
          <TextField
            name="userId"
            defaultValue={props.userClient?.userId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="userId" className="rw-field-error" />

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

export default UserClientForm
