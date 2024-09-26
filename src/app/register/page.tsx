"use client"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import {z} from "zod"
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'


const register = () => {
    
const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })
    
       



      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
    



  return (
    <div className='flex flex-row justify-center items-center h-dvh'>
    <div className=' w-80  h-96'>
       
       <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-white">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>

   
    </div>
    </div>
  )
}

export default register
