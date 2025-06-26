import { Chance } from "chance";
import { PostType } from "@/app/(DashboardLayout)/types/apps/userProfile";
import { uniqueId } from "lodash";
import { sub } from "date-fns";
import { userType } from "@/app/(DashboardLayout)/types/apps/users";

const chance = new Chance();

// social profile
export const posts: PostType[] = [
  {
    id: chance.integer({ min: 1, max: 2000 }),
    profile: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: "/images/users/1.jpg",
      name: "Katherine Langford",
      time: "15 min ago",
    },
    data: {
      content: chance.paragraph({ sentences: 2 }),
      images: [
        {
          img: "/images/products/s1.jpg",
          featured: true,
        },
      ],
      likes: {
        like: true,
        value: 67,
      },
      comments: [
        {
          id: chance.integer({ min: 1, max: 2000 }),
          profile: {
            id: chance.integer({ min: 1, max: 2000 }),
            avatar: "/images/users/3.jpg",
            name: "Deran Mac",
            time: "8 min ago ",
          },
          data: {
            comment: chance.paragraph({ sentences: 2 }),
            likes: {
              like: true,
              value: 55,
            },
            replies: [],
          },
        },
        {
          id: chance.integer({ min: 1, max: 2000 }),
          profile: {
            id: chance.integer({ min: 1, max: 2000 }),
            avatar: "/images/users/4.jpg",
            name: "Jonathan Bg",
            time: "5 min ago ",
          },
          data: {
            comment: chance.paragraph({ sentences: 2 }),
            likes: {
              like: false,
              value: 68,
            },
            replies: [
              {
                id: chance.integer({ min: 1, max: 2000 }),
                profile: {
                  id: chance.integer({ min: 1, max: 2000 }),
                  avatar: "/images/users/5.jpg",
                  name: "Carry minati",
                  time: "just now ",
                },
                data: {
                  comment: chance.paragraph({ sentences: 2 }),
                  likes: {
                    like: true,
                    value: 10,
                  },
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    profile: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: "/images/users/5.jpg",
      name: "Carry Minati",
      time: "now",
    },
    data: {
      content: chance.paragraph({ sentences: 2 }),
      images: [],
      likes: {
        like: true,
        value: 1,
      },
      comments: [],
    },
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    profile: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: "/images/users/2.jpg",
      name: "Genelia Desouza",
      time: "15 min ago ",
    },
    data: {
      content: chance.paragraph({ sentences: 2 }),
      images: [
        {
          img: "/images/products/s2.jpg",
          title: "Image Title",
        },
        {
          img: "/images/products/s4.jpg",
          title: "Painter",
        },
      ],
      likes: {
        like: false,
        value: 320,
      },
      comments: [
        {
          id: chance.integer({ min: 1, max: 2000 }),
          profile: {
            id: chance.integer({ min: 1, max: 2000 }),
            avatar: "/images/users/3.jpg",
            name: "Ritesh Deshmukh",
            time: "15 min ago ",
          },
          data: {
            comment: chance.paragraph({ sentences: 2 }),
            likes: {
              like: true,
              value: 65,
            },
            replies: [],
          },
        },
      ],
    },
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    profile: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: "/images/users/6.jpg",
      name: "Himesh R",
      time: "15 min ago ",
    },
    data: {
      content: chance.paragraph({ sentences: 2 }),
      images: [],
      video: "d1-FRj20WBE",
      likes: {
        like: true,
        value: 129,
      },
    },
  },
];

export const users: userType[] = [
  {
    id: uniqueId("#follow_"),
    avatar: "/images/users/1.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId("#follow_"),
    avatar: "/images/users/2.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId("#follow_"),
    avatar: "/images/users/3.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId("#follow_"),
    avatar: "/images/users/4.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId("#follow_"),
    avatar: "/images/users/5.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId("#follow_"),
    avatar: "/images/users/6.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId("#follow_"),
    avatar: "/images/users/7.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId("#follow_"),
    avatar: "/images/users/8.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId("#follow_"),
    avatar: "/images/users/1.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId("#follow_"),
    avatar: "/images/users/2.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId("#follow_"),
    avatar: "/images/users/1.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId("#follow_"),
    avatar: "/images/users/2.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId("#follow_"),
    avatar: "/images/users/3.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId("#follow_"),
    avatar: "/images/users/4.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId("#follow_"),
    avatar: "/images/users/5.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId("#follow_"),
    avatar: "/images/users/6.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId("#follow_"),
    avatar: "/images/users/7.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId("#follow_"),
    avatar: "/images/users/8.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId("#follow_"),
    avatar: "/images/users/3.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId("#follow_"),
    avatar: "/images/users/6.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
];

export const gallery = [
  {
    id: uniqueId("#gallery_"),
    cover: "/images/products/s1.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId("#gallery_"),
    cover: "/images/products/s2.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 8, hours: 4, minutes: 20 }),
  },
  {
    id: uniqueId("#gallery_"),
    cover: "/images/products/s3.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 8, hours: 3, minutes: 20 }),
  },
  {
    id: uniqueId("#gallery_"),
    cover: "/images/products/s4.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 8, hours: 2, minutes: 20 }),
  },
  {
    id: uniqueId("#gallery_"),
    cover: "/images/products/s5.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 8, hours: 1, minutes: 20 }),
  },
  {
    id: uniqueId("#gallery_"),
    cover: "/images/products/s6.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 7, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId("#gallery_"),
    cover: "/images/products/s7.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 6, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId("#gallery_"),
    cover: "/images/products/s8.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 5, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId("#gallery_"),
    cover: "/images/products/s9.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 4, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId("#gallery_"),
    cover: "/images/products/s10.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 3, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId("#gallery_"),
    cover: "/images/products/s11.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 2, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId("#gallery_"),
    cover: "/images/products/s12.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 1, hours: 6, minutes: 20 }),
  },
];
