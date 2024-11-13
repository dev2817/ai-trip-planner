import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();
  return (
    <div
      className='p-3 w-full shadow-sm flex justify-between items-center px-5'
    >
      <img src="/logo.svg" alt="logo" />
      <div>
        <Button onClick={() => { navigate('/auth/sign-in') }}>
          Sign In
        </Button>
      </div>
    </div>
  )
}
