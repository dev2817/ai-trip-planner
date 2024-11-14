import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import placeHolder from '/placeholder-1.jpeg'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useDispatch, useSelector } from 'react-redux';
import { clearUserId } from '@/features/userSlice';
import { persistor } from '@/store/store';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);
  const userData = useSelector((state) => state.userData);
  const handleLogOut = async () => {
    dispatch(clearUserId());
    localStorage.clear();
    persistor.purge();
    navigate('/auth/sign-in')
    return;
  }
  return (
    <div
      className='p-3 w-full shadow-sm flex justify-between items-center px-5'
    >
      <img src="/logo.svg" alt="logo" />
      <div>
        {
          userId ?
            <div className='flex items-center gap-3'>
              <Button onClick={() => { navigate('/dashboard/create-trip') }} className="rounded-full">
                Create Trip
              </Button>
              <Button variant="outline" onClick={() => { navigate('/dashboard/trips') }} className="rounded-full">
                My Trips
              </Button>
              <Popover>
                <PopoverTrigger>
                  <img src={userData.profileImage || placeHolder} alt="user" className='h-[35px] w-[35px] rounded-full' />
                </PopoverTrigger>
                <PopoverContent className="w-[100px] flex flex-col items-center px-2">
                  <h2 className='cursor-pointer' onClick={() => handleLogOut()}>
                    Logout
                  </h2>
                </PopoverContent>
              </Popover>
            </div>
            :
            <Button onClick={() => { navigate('/auth/sign-in') }}>
              Sign In
            </Button>
        }
      </div>
    </div>
  )
}
