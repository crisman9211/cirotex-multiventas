import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'

import type { EditUserAdminById, UpdateUserAdminInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormUserAdmin = NonNullable<EditUserAdminById['userAdmin']>

interface UserAdminFormProps {
  userAdmin?: EditUserAdminById['userAdmin']
  onSave: (data: UpdateUserAdminInput, id?: FormUserAdmin['id']) => void
  error: RWGqlError
  loading: boolean
}

const UserAdminForm = (props: UserAdminFormProps) => {
  const onSubmit = (data: FormUserAdmin) => {
  
    
    
  
    
    
  
    props.onSave(data, props?.userAdmin?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormUserAdmin> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>
        
          <TextField
            name="userId"
            defaultValue={props.userAdmin?.userId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="role"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Role
        </Label>
        
          
          
        <div className="rw-check-radio-items">
          <RadioField
            id="userAdmin-role-0"
            name="role"
            defaultValue="ADMIN"
            defaultChecked={props.userAdmin?.role?.includes('ADMIN')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Admin
          </div>
        </div>
          
        

        <FieldError name="role" className="rw-field-error" />

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

export default UserAdminForm
