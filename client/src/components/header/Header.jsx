import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import placeHolder from '/placeholder-1.jpeg'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Header() {
  const navigate = useNavigate();
  return (
    <div
      className='p-3 w-full shadow-sm flex justify-between items-center px-5'
    >
      <img src="/logo.svg" alt="logo" />
      <div>
        <div className='flex items-center gap-3'>
          <Button onClick={() => { navigate('/dashboard/create-trip') }} className="rounded-full">
            Create Trip
          </Button>
          <Button variant="outline" onClick={() => { navigate('/dashboard/trips') }} className="rounded-full">
            My Trips
          </Button>
          <Popover>
            <PopoverTrigger>
              <img src={placeHolder} alt="user" className='h-[35px] w-[35px] rounded-full' />
            </PopoverTrigger>
            <PopoverContent className="w-[100px] flex flex-col items-center px-2">
              <h2 className='cursor-pointer' onClick={() => navigate('/auth/sign-in')}>
                Logout
              </h2>
            </PopoverContent>
          </Popover>
        </div>
        {/* <Button onClick={() => { navigate('/auth/sign-in') }}>
          Sign In
        </Button> */}
      </div>
    </div>
  )
}
