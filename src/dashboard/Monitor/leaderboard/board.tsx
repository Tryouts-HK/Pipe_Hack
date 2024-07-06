

import { useState, useMemo } from "react"
import { Card, CardHeader, CardContent } from "../../../components/ui/card"
import { Input } from "../../../components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "../../../components/ui/avatar"

export default function Leaderboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [users] = useState([
    { id: 1, name: "John Doe", score: 1000, avatar: "/placeholder-user.jpg" },
    { id: 2, name: "Jane Smith", score: 950, avatar: "/placeholder-user.jpg" },
    { id: 3, name: "Bob Johnson", score: 900, avatar: "/placeholder-user.jpg" },
    { id: 4, name: "Alice Williams", score: 850, avatar: "/placeholder-user.jpg" },
    { id: 5, name: "Tom Davis", score: 800, avatar: "/placeholder-user.jpg" },
    { id: 6, name: "Sarah Lee", score: 750, avatar: "/placeholder-user.jpg" },
    { id: 7, name: "Mike Brown", score: 700, avatar: "/placeholder-user.jpg" },
    { id: 8, name: "Emily Wilson", score: 650, avatar: "/placeholder-user.jpg" },
    { id: 9, name: "David Anderson", score: 600, avatar: "/placeholder-user.jpg" },
    { id: 10, name: "Olivia Taylor", score: 550, avatar: "/placeholder-user.jpg" },
  ])
  const filteredUsers = useMemo(() => {
    return users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [users, searchTerm])
  const topThreeUsers = filteredUsers.slice(0, 3)
  const remainingUsers = filteredUsers.slice(3)
  return (
    <Card className="w-full max-w-4xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-[#9b59b6] to-[#8e44ad] px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Leaderboard</h2>
          <div className="relative w-full max-w-md">
            <div className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white" />
            <Input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full bg-white/20 px-10 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#9b59b6] focus:w-[300px] transition-width duration-300"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {topThreeUsers.length > 0 ? (
          <div>
            <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
              {topThreeUsers.map((user, index) => (
                <div
                  key={user.id}
                  className={`flex items-center gap-4 ${
                    index === 0
                      ? "bg-gradient-to-r from-[#f1c40f] to-[#e67e22] text-white px-6 py-3 rounded-lg"
                      : index === 1
                      ? "bg-gradient-to-r from-[#7f8c8d] to-[#95a5a6] text-white px-6 py-3 rounded-lg"
                      : "bg-gradient-to-r from-[#2980b9] to-[#3498db] text-white px-6 py-3 rounded-lg"
                  }`}
                >
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-medium">{user.name}</h3>
                    <p className="text-sm text-white/80">Score: {user.score}</p>
                  </div>
                  <div className="text-lg font-bold">{index + 1}.</div>
                </div>
              ))}
            </div>
            <div className="space-y-4 mt-6">
              {remainingUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-medium">{user.name}</h3>
                      <p className="text-sm text-muted-foreground">Score: {user.score}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex h-48 items-center justify-center">
            <div className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
      </CardContent>
    </Card>
  )
}