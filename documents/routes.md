# Thiết kế RESTful API cho Website

# I. Danh sách routers:

## 1. Post:

```javascript
GET: posts?queryParams
GET: p/:slug
POST: publish/post
UPDATE: p/:slug
DELETE: p/:slug
```

## 2. Question:

```javascript
GET: questions?queryParams
GET: q/:slug
POST: publish/question
UPDATE: q/:slug
DELETE: q/:slug
```

## 3. Tag:

```javascript
GET: tags?queryParams
GET: tags/:slug
GET: tags/:slug/posts
GET: tags/:slug/questions
// tạo tag trong lúc query tạo post/question
```

### 1.1. Trả về một bài đăng dựa trên **:slug** của bài đăng

```javascript
GET: p/:slug
```

**Input:** :slug  
**Output:**

```javascript
data: {
    slug: '',
    title: '',
    content: '',
    points: 0,
    bookmarks_count: 0,
    comments_count: 0,
    publishedAt: "10 tháng 2 năm 2022",
    created_at: '',
    updated_at: '',
    user: {
        data: {
            username: '',
            avatar: '',
            following: false,
            followers_count: 0,
            posts_count: 0,
            questions_count: 0
        }
    },
    tags: [
        {
            slug: '',
            title: ''
        }
    ]
}
```

### 1.2. Trả về danh sách bài đăng

```javascript
GET: posts?queryParams
```

**Input:**

```javascript
data: {
    page: 1,
    type: 'newest',
    ...
}
```

**Output:**

```javascript
{
    data: [{
        // p/:slug
    }],
    meta: {
        pagination: {
            currentPage: 1,
            totalPage: 10,
            perPage: 20
        }
    }
}
```

# II. Status Code:

- 200 OK – Trả về thành công cho những phương thức GET, PUT, PATCH hoặc DELETE.
- 201 Created – Trả về khi một Resouce vừa được tạo thành công.
- 204 No Content – Trả về khi Resource xoá thành công.
- 304 Not Modified – Client có thể sử dụng dữ liệu cache.
- 400 Bad Request – Request không hợp lệ
- 401 Unauthorized – Request cần có auth.
- 403 Forbidden – bị từ chối không cho phép.
- 404 Not Found – Không tìm thấy resource từ URI
- 405 Method Not Allowed – Phương thức không cho phép với user hiện tại.
- 410 Gone – Resource không còn tồn tại, Version cũ đã không còn hỗ trợ.
- 415 Unsupported Media Type – Không hỗ trợ kiểu Resource này.
- 422 Unprocessable Entity – Dữ liệu không được xác thực
- 429 Too Many Requests – Request bị từ chối do bị giới hạn
