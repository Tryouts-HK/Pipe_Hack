
import { Button } from "../../../components/ui/button"
import { Card } from "../../..//components/ui/card"
import { Link } from "react-router-dom"

export const Mes = () => {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link to="#" className="flex items-center justify-center" 
        // prefetch={false}
        >
          <AmbulanceIcon className="h-6 w-6 text-primary" />
          <span className="sr-only">Emergency Services</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            to="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            // prefetch={false}
          >
            Police
          </Link>
          <Link
            to="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            // prefetch={false}
          >
            Ambulance
          </Link>
          <Link
            to="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            // prefetch={false}
          >
            Fire
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col">
        <section className="bg-primary px-4 py-8 md:px-6 md:py-12 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl">Get Help Fast</h1>
          <p className="mt-4 max-w-[600px] text-primary-foreground md:text-xl">
            Don't hesitate to call emergency services if you or someone you know is in immediate danger. We're here to
            help.
          </p>
          <div className="mt-6 flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="w-full min-[400px]:w-auto">
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call Police
            </Button>
            <Button className="w-full min-[400px]:w-auto">
              <AmbulanceIcon className="h-5 w-5 mr-2" />
              Call Ambulance
            </Button>
            <Button className="w-full min-[400px]:w-auto">
              <FlameIcon className="h-5 w-5 mr-2" />
              Call Fire
            </Button>
          </div>
        </section>
        <section className="px-4 py-8 md:px-6 md:py-12 flex flex-col gap-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Quick Actions</h2>
            <p className="text-muted-foreground">Easily access common emergency actions.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <Card className="p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors">
              <LocateIcon className="h-8 w-8" />
              <div className="text-sm font-medium">Share Location</div>
            </Card>
            <Card className="p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors">
              <MessageCircleIcon className="h-8 w-8" />
              <div className="text-sm font-medium">Send Message</div>
            </Card>
            <Card className="p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors">
              <ContactIcon className="h-8 w-8" />
              <div className="text-sm font-medium">Emergency Contacts</div>
            </Card>
            <Card className="p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors">
              <AmbulanceIcon className="h-8 w-8" />
              <div className="text-sm font-medium">First Aid</div>
            </Card>
          </div>
        </section>
        <section className="px-4 py-8 md:px-6 md:py-12 flex flex-col gap-8 bg-muted">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Message Templates</h2>
            <p className="text-muted-foreground">Quickly send pre-written messages to emergency services.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card className="p-4 flex flex-col gap-4 hover:bg-accent hover:text-accent-foreground transition-colors">
              <div className="text-lg font-bold">Police</div>
              <p className="text-muted-foreground">"I need police assistance immediately. My location is..."</p>
              <Button>Send Message</Button>
            </Card>
            <Card className="p-4 flex flex-col gap-4 hover:bg-accent hover:text-accent-foreground transition-colors">
              <div className="text-lg font-bold">Ambulance</div>
              <p className="text-muted-foreground">"I need an ambulance right away. Someone is injured at..."</p>
              <Button>Send Message</Button>
            </Card>
            <Card className="p-4 flex flex-col gap-4 hover:bg-accent hover:text-accent-foreground transition-colors">
              <div className="text-lg font-bold">Fire</div>
              <p className="text-muted-foreground">
                "There is a fire at my location. Please send fire department\n immediately."
              </p>
              <Button>Send Message</Button>
            </Card>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Emergency Services. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground" 
        //   prefetch={false}
          >
            Terms of Service
          </Link>
          <Link to="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground" 
        //   prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function AmbulanceIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 10H6" />
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
      <path d="M8 8v4" />
      <path d="M9 18h6" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}


function ContactIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  )
}


function FlameIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}


function LocateIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MessageCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}