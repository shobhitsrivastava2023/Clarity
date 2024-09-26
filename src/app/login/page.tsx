"use client"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import {z} from "zod"
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import Router, { useRouter } from 'next/navigation'
const register = () => {
  const router = useRouter(); 
    
const formSchema = z.object({
    password : z.string().min(4,{
      message: "password should be more than 4 words"
    }),
    email : z.string().email({
      message : " invalid email you have entered sir. "
    })
  })
    
       



      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          password: "",
          email: "", 
        },
      })

      async function  onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        try {
          const response = await fetch('/api/loginUser', {
          method: 'POST', 
          headers: { 
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
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
          if(userData){ 
            router.push('/login')
          }
          }

          catch (error) {
            console.error("Unexpected error:", error);
            // Handle unexpected errors
          }

         
        


      
       
      }
    



  return (<>
  <div className='text-white  text-center mt-24'> 
    <h1 className='text-3xl font-semibold'> Login to Clarity </h1>
  </div>
    <div className='flex flex-row justify-center items-center mt-12'>
    <div className=' w-80  h-96'>
       <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-white">        
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
                <Input placeholder="enter the password" type='password' {...field} />
              </FormControl>
              <FormDescription>
              <a href="/register" className='text-white hover:text-blue-500'> Don't have an account already ? </a>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       
        <Button type="submit" className=' hover:bg-green-500 w-full'>Submit</Button>
      </form>
      
    </Form>

   
    </div>
    </div>
    </>
  )
}

export default register
