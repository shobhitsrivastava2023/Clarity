import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';


import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import SearchInput from './SearchInput';
import { Textarea } from '@/components/ui/textarea';

const Postbox = () => {
  return (
    <div className='w-[90%] border-2 border-[rgb(53,53,53)] h-[81%] rounded-[51px]'>
      <div className="flex justify-center items-center mt-6">
        <h1 className='text-white font-bold text-3xl tracking-wide'>
          PostBox
        </h1>
      </div>
      <div className='flex flex-col justify-center items-center mt-7 text-white '>

       <div className='grid grid-rows-4 gap-5  h-72'>
        <div>this is first item</div>
        <div>this is second item</div>
        <div>this is third item</div>
       </div>
       <div className='w-full  h-24'>
        <div className='float-right h-full mr-14'>
          <div className='h-12'>
          <Dialog>
      <DialogTrigger asChild>
      <button>
                    <CiCirclePlus size={60} />
                  </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md text-white">
        <DialogHeader>
          <DialogTitle>Send  A Message</DialogTitle>
          <DialogDescription>
            Search Person ...
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="col-span-4">
            <SearchInput />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Message
            </Label>
            <Textarea id="username" placeholder="hey there how are you? " className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
        <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
        </DialogClose>

        <Button type="button" variant="destructive">
              Post
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
          </div>
        
        </div>
        
       </div>
      </div>
       
      
    </div>
  )
}

export default Postbox
