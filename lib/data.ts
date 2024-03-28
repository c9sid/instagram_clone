import { Clapperboard, Compass, Heart, Home, MessageCircle, PlusSquare, Search, UserCircle } from "lucide-react"

export const storyData = [
    {
        id: '1',
        image: '/image.jpg',
        text: 'Siddharth',
    },
    {
        id: '2',
        image: '/image.jpg',
        text: 'user-2',
    },
    {
        id: '3',
        image: '/image.jpg',
        text: 'user-3',
    },
    {
        id: '4',
        image: '/image.jpg',
        text: 'user-4',
    },
    {
        id: '5',
        image: '/image.jpg',
        text: 'user-5',
    },
    {
        id: '6',
        image: '/image.jpg',
        text: 'user-6',
    },
    {
        id: '7',
        image: '/image.jpg',
        text: 'user-7',
    },
    {
        id: '8',
        image: '/image.jpg',
        text: 'user-8',
    },
    {
        id: '9',
        image: '/image.jpg',
        text: 'user-9',
    },
    {
        id: '10',
        image: '/image.jpg',
        text: 'user-10',
    },
    {
        id: '11',
        image: '/image.jpg',
        text: 'user-11',
    },
  ]

  export const links = [
    {
        icon: Home,
        name: 'Home',
        url: '/dashboard'
    },
    {
        icon: Search,
        name: 'Search',
        url: '/dashboard/search',
        hiddenOnMobile: true,
    },
    {
        icon: Compass,
        name: 'Explore',
        url: '/dashboard/explore'
    },
    {
        icon: Clapperboard,
        name: 'Reels',
        url: '/dashboard/reels'
    },
    {
        icon: MessageCircle,
        name: 'Messages',
        url: '/dashboard/messages'
    },
    {
        icon: Heart,
        name: 'Notifications',
        url: '/dashboard/notification',
        hiddenOnMobile: true,
    },
    {
        icon: PlusSquare,
        name: 'Create',
        url: '/dashboard/create'
    },
    {
        icon: UserCircle,
        name: 'Profile',
        url: '/dashboard/profile'
    },
  ]