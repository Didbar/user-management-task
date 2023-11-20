import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  SimpleGrid,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Select } from 'chakra-react-select'
import { Controller, useForm } from 'react-hook-form'
import { USER_DEFAULT_VALUES, ZOD_USER_SCHEMA } from 'src/features/user/constants'
import useAddUser from 'src/hooks/useAddUser'
import useGroups from 'src/hooks/useGroups'
import { z } from 'zod'

const schema = z.object(ZOD_USER_SCHEMA)
type FormData = z.infer<typeof schema>

interface selectedGroup {
  value: number
  label: string
}
interface FormFieldValues {
  email: string
  groups: selectedGroup[]
  name: string
}

const UserForm = () => {
  const { data: groups } = useGroups()
  const options = groups.map(g => ({ value: g.id, label: g.name }))
  const addUser = useAddUser()

  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: 'all' })

  const onSubmit = async (data: FormFieldValues) => {
    const user = { ...data, groups: data.groups.map(g => g.value) }
    addUser.mutate({
      id: Number(new Date()),
      ...user,
    })
    reset(USER_DEFAULT_VALUES)
  }
  return (
    <SimpleGrid
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      w="100%"
      columns={{ base: 1, md: 2 }}
      gap={10}
      boxShadow="lg"
      p="10px">
      <FormControl isRequired isInvalid={errors.name && true}>
        <Input {...register('name')} id="name" type="text" placeholder="User name..." />
        {errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}
      </FormControl>
      <FormControl isRequired isInvalid={errors.email && true}>
        <Input
          {...register('email')}
          id="email"
          type="email"
          placeholder="User email..."
        />
        {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
      </FormControl>
      <Controller
        control={control}
        name="groups"
        render={({ field, fieldState: { invalid, error } }) => (
          <FormControl id="groups" isInvalid={invalid}>
            <Select
              isMulti
              {...field}
              options={options}
              placeholder="User Groups"
              closeMenuOnSelect={false}
            />
            <FormErrorMessage>{error && error.message}</FormErrorMessage>
          </FormControl>
        )}
      />
      <FormControl>
        <Button
          colorScheme="blue"
          variant="outline"
          type="submit"
          isDisabled={!isValid}
          w={{ base: 'full', md: 'initial' }}>
          Add user
        </Button>
      </FormControl>
    </SimpleGrid>
  )
}

export default UserForm
