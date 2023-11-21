import { Button, Flex, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import useAddGroup from 'src/hooks/useAddGroup'
import { z } from 'zod'
import { ZOD_GROUP_SCHEMA } from './constants'

const schema = z.object(ZOD_GROUP_SCHEMA)
type FormData = z.infer<typeof schema>

const GroupForm = () => {
  const addGroup = useAddGroup()

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: 'all' })

  const onSubmit = async (data: FormData) => {
    addGroup.mutate({
      id: Number(new Date()),
      members: [],
      ...data,
    })
    reset()
  }

  return (
    <Flex
      w="100%"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      flexDir={{ base: 'column', md: 'row' }}
      gap={10}
      boxShadow="lg"
      p="10px">
      <FormControl isRequired isInvalid={errors.name && true}>
        <Input {...register('name')} id="name" type="text" placeholder="Group name..." />
        {errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}
      </FormControl>
      <FormControl isRequired isInvalid={errors.slug && true}>
        <Input {...register('slug')} id="slug" type="text" placeholder="Group slug..." />
        {errors.slug && <FormErrorMessage>{errors.slug.message}</FormErrorMessage>}
      </FormControl>
      <FormControl>
        <Button
          isDisabled={!isValid}
          colorScheme="blue"
          variant="outline"
          type="submit"
          w="full">
          Add Group
        </Button>
      </FormControl>
    </Flex>
  )
}

export default GroupForm
