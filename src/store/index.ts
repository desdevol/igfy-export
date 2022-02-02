import { createStore } from "vuex";

export default createStore({
    state: {
        author: {
            avatar: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
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
    },
    mutations: {
        updateAuthorAvatar(state, val) {
            state.author.avatar = val;
        },
        updateAuthorUsername(state, val) {
            state.author.username = val;
        },
        updatePostPicture(state, val) {
            state.post.picture = val;
        },
        updatePostDate(state, val) {
            state.post.date = val;
        },
        updateLikesAvatars(state, val) {
            state.likes.avatars = val;
        },
        updateLikesFirstUserName(state, val) {
            state.likes.firstUserName = val;
        },
        updateNumberOfOtherLikes(state, val) {
            state.likes.numberOfOtherLikes = val;
        },
        updateNumberOfComments(state, val) {
            state.numberOfComments = val;
        },
        updateProfileAvatar(state, val) {
            state.profileAvatar = val;
        },
    },
    actions: {},
    modules: {},
});
