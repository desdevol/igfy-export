<template lang="pug">
#igfy-layout
  .top-bar.flex.justify-content-between.align-items-center
    .brand Fillup Mart
    .actions
      .px-2.inline-block
        AddIcon
      .px-2.inline-block
        HeartIcon
      .px-2.inline-block
        MessengerIcon

  .post
    .top-section.flex.justify-content-between.align-items-center.p-2
      .author
        img.avatar(:src="author.avatar")
        span.username.pl-2
          | {{ author.username }}
      .p-2
        MoreIcon
    img.picture(:src="post.picture")

    .bottom-section.p-2
      .actions.flex.justify-content-between.my-2
        .left-section.flex
          .px-2
            HeartIcon
          .px-2
            CommentIcon
          .px-2
            ShareIcon
        .right-section
          .px-2
            BookmarkIcon

      .engagement.mt-2.mb-1
        .likes.flex.align-items-start
          .avatars
            .avatar
              img(:src="likes.avatars[0]")
            .avatar
              img(:src="likes.avatars[1]")
            .avatar
              img(:src="likes.avatars[2]")

          .stat.pl-2
            p.text-left Liked by
              = " "
              span.font-bold {{ likes.firstUserName }}
              = " "
              | and
              = " "
              span.font-bold {{ likes.numberOfOtherLikes }} others
        .comments.flex.align-items-start.mt-2
          | View all {{ numberWithCommas(numberOfComments) }} comments
      .date.text-left
        | {{ post.date }}

  .bottom-nav
    .flex.justify-content-around
      .nav-icon
        HomeIcon(width="100%", height="100%")
      .nav-icon
        SearchIcon(width="100%", height="100%")
      .nav-icon
        ReelsIcon(width="100%", height="100%")
      .nav-icon
        ShopIcon(width="100%", height="100%")
      .nav-icon
        img.profile-avatar(:src="profileAvatar", alt="profile-avatar")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddIcon from "@/assets/icons/add.svg?inline";
import HeartIcon from "@/assets/icons/heart.svg?inline";
import MessengerIcon from "@/assets/icons/messenger.svg?inline";
import MoreIcon from "@/assets/icons/more-horizontal.svg?inline";
import CommentIcon from "@/assets/icons/comment.svg?inline";
import ShareIcon from "@/assets/icons/share.svg?inline";
import BookmarkIcon from "@/assets/icons/bookmark.svg?inline";

import HomeIcon from "@/assets/icons/home.svg?inline";
import SearchIcon from "@/assets/icons/search.svg?inline";
import ReelsIcon from "@/assets/icons/reels.svg?inline";
import ShopIcon from "@/assets/icons/shopping-bag.svg?inline";

import * as htmlToImage from "html-to-image";
import { useToast } from "primevue/usetoast";
import { saveAs } from "file-saver";

function exportPng() {
  let node = document.getElementById("igfy-layout") as HTMLImageElement;
  htmlToImage
    .toPng(node)
    .then((dataUrl) => {
      saveAs(dataUrl);
    })
    .catch((err) => {
      const toast = useToast();
      toast.add({ severity: "danger", summary: "Failed to export image", detail: err, life: 5000 });
      console.error(err);
    });
}

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default defineComponent({
  name: "Home",
  components: {
    AddIcon,
    HeartIcon,
    MessengerIcon,
    MoreIcon,
    CommentIcon,
    ShareIcon,
    BookmarkIcon,
    HomeIcon,
    SearchIcon,
    ReelsIcon,
    ShopIcon,
  },
  data() {
    return {
      author: {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        username: "desdevol",
      },
      post: {
        picture:
          "https://images.unsplash.com/photo-1642775588061-5743b12a47c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        date: "November 12",
      },
      likes: {
        avatars: [
          "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
          "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
          "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
        ],
        firstUserName: "kermit_the_frog",
        numberOfOtherLikes: 69,
      },
      numberOfComments: 180,
      profileAvatar:
        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",

      numberWithCommas,
    };
  },
  methods: {
    exportImage() {
      exportPng();
    },
  },
});
</script>

<style lang="scss">
@font-face {
  font-family: "OleoScript";
  src: url("~@/assets/fonts/OleoScript/OleoScript-Regular.ttf") format("truetype");
}

#igfy-layout {
  background-color: white;
  max-width: 768px;
  padding-bottom: 60px;
  .top-bar {
    padding: 0.6em;
    border-bottom: solid 0.5px #eaeaea;
    .brand {
      font-family: "OleoScript";
      font-size: 2em;
      padding-left: 0.2em;
      padding-right: 0.2em;
    }
  }

  .post {
    .top-section {
      .author {
        display: flex;
        align-items: center;
        .avatar {
          width: 2em;
          border-radius: 100%;
          object-fit: cover;
        }
        .username {
          font-weight: 500;
        }
      }
    }
    .picture {
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
    }
    .bottom-section {
      .engagement {
        .likes {
          .avatars {
            display: inline-flex;
            flex-direction: row-reverse;
          }

          .avatar {
            position: relative;
            border: 3px solid #fff;
            border-radius: 50%;
            overflow: hidden;
            width: 1.6em;
          }

          .avatar:not(:last-child) {
            margin-left: -0.6em;
          }

          .avatar img {
            width: 100%;
            display: block;
          }

          .stat {
            p {
              margin: 0;
            }
          }
        }
        .comments {
          color: #888;
        }
      }
      .date {
        color: #888;
        font-size: 0.8em;
      }
    }
  }

  .bottom-nav {
    background: white;
    position: fixed;
    max-width: 768px;
    bottom: 0;
    width: 100%;
    border-top: solid 1px #eee;
    padding-top: 1em;
    padding-bottom: 1em;
    .nav-icon,
    .profile-avatar {
      width: 1.6em;
      height: 1.6em;
    }
    .profile-avatar {
      border-radius: 50%;
    }
  }
}
</style>
