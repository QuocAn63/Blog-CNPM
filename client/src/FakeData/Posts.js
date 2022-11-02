export const posts = [
   {
      slug: '1-bai-blog-mau',
      title: 'Cách tạo 1 bài blog',
      content: 'Cách tạo 1 bài blog',
      points: 4,
      bookmarks_count: 0,
      comments_count: 0,
      publishedAt: '10 tháng 2 năm 2022',
      created_at: '',
      updated_at: '',
      user: {
         data: {
            username: 'caoquocan',
            fullname: 'Cao Quốc Ân',
            avatar: '',
            following: false,
            followers_count: 0,
            posts_count: 0,
            questions_count: 0,
         },
      },
      isSolved: true,
      tags: [
         {
            slug: 'nodejs',
            title: 'NodeJS',
         },
         {
            slug: 'reactjs',
            title: 'ReactJS',
         },
      ],
   },
   {
      slug: '1-bai-blog-mau',
      title: 'Cách tạo 1 bài blog',
      content: 'Cách tạo 1 bài blog',
      points: 4,
      bookmarks_count: 0,
      comments_count: 0,
      publishedAt: '10 tháng 2 năm 2022',
      created_at: '',
      updated_at: '',
      user: {
         data: {
            username: 'caoquocan',
            fullname: 'Cao Quốc Ân',
            avatar: '',
            following: false,
            followers_count: 0,
            posts_count: 0,
            questions_count: 0,
         },
      },
      tags: [
         {
            slug: 'nodejs',
            title: 'NodeJS',
         },
         {
            slug: 'reactjs',
            title: 'ReactJS',
         },
      ],
   },
   {
      slug: '1-bai-blog-mau',
      title: 'Cách tạo 1 bài blog',
      content: 'Cách tạo 1 bài blog',
      points: 4,
      bookmarks_count: 0,
      comments_count: 0,
      publishedAt: '10 tháng 2 năm 2022',
      created_at: '',
      updated_at: '',
      user: {
         data: {
            username: 'caoquocan',
            fullname: 'Cao Quốc Ân',
            avatar: '',
            following: false,
            followers_count: 0,
            posts_count: 0,
            questions_count: 0,
         },
      },
      tags: [
         {
            slug: 'nodejs',
            title: 'NodeJS',
         },
         {
            slug: 'reactjs',
            title: 'ReactJS',
         },
      ],
   },
];

export const singlePost = {
   slug: '1-bai-blog-mau',
   title: "Ubuntu-QEmu-Reboot-UEFI",
   content: "<p>Lấy ý tưởng từ QEMUBootTester nhìn thấy trong <a href='https://anhdvboot.com/' target='_blank'>bộ rescue boot của Anhdv</a> không rõ ai làm ra</p> <h2>Miễn trừ trách nhiệm</h2> <p><strong><em>Cảnh báo</em></strong></p> <ul> <li>Bạn làm theo hướng dẫn này là bạn đang đối mặt với <strong>rủi ro hỏng phân vùng và gây mất mát dữ liệu</strong>, mình làm theo và cũng đã nghịch ngu và dẫn đến việc mất dữ liệu, không thể cứu được dữ liệu. <strong>Làm hay không là lựa chọn của bạn mình cũng đã cảnh báo, lúc hỏng đừng đổ tại do mình xúi giục</strong>. Bên cạnh đó mình sẽ ghi ở mỗi phần nên làm gì và tránh làm gì, nếu bạn tìm được thêm các giải pháp hoặc các vấn đề mà mình chưa tốt hãy <strong>comment</strong> để nói với mình.</li> </ul> <h2>Thực hiện</h2> <p>Mình làm theo hướng dẫn của <a href='https://web.archive.org/web/https://k3a.me/boot-windows-partition-virtually-kvm-uefi/' target='_blank'>K3A</a></p> <h3>Step 1: Download QEmu (Đương nhiên òi =)))</h3> <ul> <li>Tùy vào máy bạn là phiên bản nào, máy mình là x86_64 nên mình cài qemu-system-x86, còn một số nền tảng khác bạn tự tra theo máy (ARM, ...).</li> <li>Thêm package OVMF cho UEFI</li> <li>Cho nhanh copy lun: <code>sudo apt install qemu-system-x86 ovmf</code></li> </ul> <h3>Step 2: Chuẩn bị Boot thui</h3> <blockquote> <p><strong><em>Mình chạy trên Ubuntu 22.04 trên máy Dell Inspiron 7591. Copy full rồi chạy xảy ra vấn đề gì mình không chịu trách nhiệm</em></strong> Cấu hình máy sương sương</p> <ul> <li>CPU: Intel i5-9300H (8) @ 4.100GHz</li> <li>GPU: NVIDIA GeForce GTX 1050 3 GB Max-Q</li> <li>GPU: Intel CoffeeLake-H GT2 (UHD Graphics 630)</li> <li>Memory: 16GB</li> <li>SSD: BC501 NVMe SK hynix 256GB (/dev/nvme0n1) - format dạng GPT</li> <li>HDD: WDC WD10SPZX-00Z10T0 (/dev/sda) - format dạng MBR</li> </ul> </blockquote> <ul> <li><strong><em>Part 1</em></strong> : Dựng command cho QEmu (làm cái file sh xịn xịn nào)</li> <ul> <li><em>Step 2.1.1</em>: Thêm <code>sudo</code> đương nhiên rồi chúng ta sẽ cần gọi /dev để lấy các ổ đĩa, USB, ...</li> <li><em>Step 2.1.2</em>: Thêm <code>qemu-system-x86_64</code> hoặc <code>qemu-system-i386</code> tùy vào 64 hay 32 bit</li> </ul> </ul>",
   tags: [
      {
         slug: 'nodejs',
         title: 'NodeJS',
      },
      {
         slug: 'reactjs',
         title: 'ReactJS',
      },
   ],
   points: 4,
   isUpvoted: false,
   isDownvoted: false,
   bookmarks_count: 0,
   comments_count: 0,
   publishedAt: '10 tháng 2 năm 2022',
   created_at: '',
   updated_at: '',
   user: {
      data: {
         username: 'caoquocan',
         fullname: 'Cao Quốc Ân',
         avatar: '',
         following: false,
         followers_count: 0,
         posts_count: 0,
         questions_count: 0,
      },
   },
}

export const singleQuestion = {
   slug: '1-bai-blog-mau',
   title: "Hỏi về mẫu design database website tương tự Viblo",
   content: "Chào mn, hiện tại em đang làm project môn học website hỏi đáp tương tự Viblo, có ai đã từng làm rồi cho em xin design database hoặc design flow mẫu với ạ. Em cảm ơn ạ",
   tags: [
      {
         slug: 'nodejs',
         title: 'NodeJS',
      },
      {
         slug: 'reactjs',
         title: 'ReactJS',
      },
   ],
   points: 4,
   isUpvoted: false,
   isDownvoted: false,
   bookmarks: 0,
   replies: 0,
   publishedAt: '10 tháng 2 năm 2022',
   created_at: '',
   updated_at: '',
   user: {
      data: {
         username: 'caoquocan',
         fullname: 'Cao Quốc Ân',
         avatar: '',
         following: false,
         followers_count: 0,
         posts_count: 0,
         questions_count: 0,
      },
   },
}