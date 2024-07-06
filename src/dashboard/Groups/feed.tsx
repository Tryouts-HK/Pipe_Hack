
import { Button } from "../../components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "../..//components/ui/avatar"

export default function Feed () {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Social Feed</h1>
              <p className="text-sm text-primary-foreground/80">Stay connected with your community.</p>
            </div>
            <Button variant="outline" className="ml-auto">
              Create Post
            </Button>
          </div>
        </div>
      </header>
      <div className="container max-w-5xl grid md:grid-cols-[280px_1fr] gap-8 py-12 px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <div className="bg-background rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold mb-2">Trending</h3>
            <div className="grid gap-2">
              <Button variant="ghost" className="justify-start">
                Popular
              </Button>
              <Button variant="ghost" className="justify-start">
                Latest
              </Button>
              <Button variant="ghost" className="justify-start">
                Following
              </Button>
            </div>
          </div>
          <Button className="w-full">Create Post</Button>
        </div>
        <div className="grid gap-6">
          <div className="bg-background rounded-lg shadow p-4">
            <div className="flex items-center gap-4 mb-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">John Doe</h4>
                <p className="text-sm text-muted-foreground">2 hours ago</p>
              </div>
              <Button variant="ghost" className="ml-auto">
                <MoveHorizontalIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="mb-4">
              <img
                src="/placeholder.svg"
                alt="Post Image"
                width={800}
                height={450}
                className="rounded-md object-cover aspect-[16/9]"
              />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost">
                <HeartIcon className="w-4 h-4" />
                <span className="sr-only">Like</span>
              </Button>
              <Button variant="ghost">
                <MessageCircleIcon className="w-4 h-4" />
                <span className="sr-only">Comment</span>
              </Button>
              <Button variant="ghost">
                <SendIcon className="w-4 h-4" />
                <span className="sr-only">Share</span>
              </Button>
              <Button variant="ghost" className="ml-auto">
                <BookmarkIcon className="w-4 h-4" />
                <span className="sr-only">Save</span>
              </Button>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow p-4">
            <div className="flex items-center gap-4 mb-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">Jane Smith</h4>
                <p className="text-sm text-muted-foreground">1 day ago</p>
              </div>
              <Button variant="ghost" className="ml-auto">
                <MoveHorizontalIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="mb-4">
              <img
                src="/placeholder.svg"
                alt="Post Image"
                width={800}
                height={450}
                className="rounded-md object-cover aspect-[16/9]"
              />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost">
                <HeartIcon className="w-4 h-4" />
                <span className="sr-only">Like</span>
              </Button>
              <Button variant="ghost">
                <MessageCircleIcon className="w-4 h-4" />
                <span className="sr-only">Comment</span>
              </Button>
              <Button variant="ghost">
                <SendIcon className="w-4 h-4" />
                <span className="sr-only">Share</span>
              </Button>
              <Button variant="ghost" className="ml-auto">
                <BookmarkIcon className="w-4 h-4" />
                <span className="sr-only">Save</span>
              </Button>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow p-4">
            <div className="flex items-center gap-4 mb-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">Michael Johnson</h4>
                <p className="text-sm text-muted-foreground">3 days ago</p>
              </div>
              <Button variant="ghost" className="ml-auto">
                <MoveHorizontalIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="mb-4">
              <img
                src="/placeholder.svg"
                alt="Post Image"
                width={800}
                height={450}
                className="rounded-md object-cover aspect-[16/9]"
              />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost">
                <HeartIcon className="w-4 h-4" />
                <span className="sr-only">Like</span>
              </Button>
              <Button variant="ghost">
                <MessageCircleIcon className="w-4 h-4" />
                <span className="sr-only">Comment</span>
              </Button>
              <Button variant="ghost">
                <SendIcon className="w-4 h-4" />
                <span className="sr-only">Share</span>
              </Button>
              <Button variant="ghost" className="ml-auto">
                <BookmarkIcon className="w-4 h-4" />
                <span className="sr-only">Save</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BookmarkIcon(props: any) {
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
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}


function HeartIcon(props: any) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
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


function MoveHorizontalIcon(props: any) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}


function SendIcon(props: any) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}