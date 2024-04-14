import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "pages/home";
import PostListPage from "pages/posts";
import PostDetailPage from "pages/posts/detail";
import NewPostPage from "pages/posts/new";
import PostEditPage from "pages/posts/edit";
import ProfilePage from "pages/profile";
import ProfileEditPage from "pages/profile/edit";
import NotificationsPage from "pages/notifications";
import SearchPage from "pages/search";
import LoginPage from "pages/users/login";
import SignupPage from "pages/users/signup";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostListPage />} />
            <Route path="/posts/:id" element={<PostDetailPage />} />
            <Route path="/posts/new" element={<NewPostPage />} />
            <Route path="/posts/edit/:id" element={<PostEditPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/edit" element={<ProfileEditPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/users/login" element={<LoginPage />} />
            <Route path="/users/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    );
}
