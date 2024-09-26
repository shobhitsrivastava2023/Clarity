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
    password : z.string().min(4,{
      message: "password should be more than 4 words"
    }),
    confirmPassword : z.string().min(4, {
       message: "password should be more than 4 words"
    }),
    email : z.string().email({
      message : " invalid email you have entered sir. "
    })
  }).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'], // Specify where the error should be displayed
    message: "Passwords do not match.",
  })
    
       



      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          password: "",
          confirmPassword: "",
          email: "", 
        },
      })

      async function  onSubmit(values: z.infer<typeof formSchema>) {
        try {
          const response = await fetch('/api/RegisterUser', {
          method: 'POST', 
          headers: { 
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
           username : values.username,
           email : values.email,
           password : values.email, 
          })
        })
         if (!response.ok) {
            const errorData = await response.json();
            console.error("Error:", errorData.errors || errorData.error);
            // Handle the error as needed (e.g., display error messages)
            return;
          }

          const userData = await response.json();
      console.log("User registered:", userData);
          }

          catch (error) {
            console.error("Unexpected error:", error);
            // Handle unexpected errors
          }

         
        


      
       
      }
    



  return (
    <div className='flex flex-row justify-center items-center h-dvh'>
    <div className=' w-80  h-96'>
    <h1  className='text-white text-3xl mb-4'>
          Signup To Clarity
        </h1>
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
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="thisisyou@13.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Your password" type='password' {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />   
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Re-Password</FormLabel>
              <FormControl>
                <Input placeholder="Re-enter the password" type='password' {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className=' hover:bg-green-500 w-full'>Submit</Button>
      </form>
    </Form>

   
    </div>
    </div>
  )
}

export default register
