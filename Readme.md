1. Những thư viện CSS và JS bạn đã dùng ? nêu chức năng và ưu điểm của các thư viện đó ?
  - Bootstrap
    + Chức năng : 
      * Thư viện hỗ trợ thiết kế CSS cho HTML.
      * Cung cấp các class tiện dụng.
      * Phân chia bố cục, Responsive cho website.
    + Ưu điểm : 
      * Dễ sử dụng.
      * Sử dụng nhanh gọn, tiện ích, tiết kiệm thời gian.
      * Tính năng Responsive hữu ích cho thiết kế.
      * Tương thích với nhiều trình duyệt.
  - ReactJS
    + Chức năng : 
      * Xây dựng giao diện người dùng.
      * Quản lý các thành phần giao diện.
    + Ưu điểm : 
      * Thực hiện và quản lý các dự án lớn dễ dàng hơn.
      * Các thành phần có thể tái sử dụng.
      * Dễ bảo trì.
  - JQuery
    + Chức năng :
      * Cung cấp các thao tác xử lý sự kiện, AJAX, hiệu ứng hỗ trợ lập trình.
    + Ưu điểm : 
      * Dễ sử dụng.
      * Sử dụng nhanh gọn, tiện ích, tiết kiệm thời gian.
2. Trình bày về xử lý bất đồng bộ trong JS và bạn đã dùng chỗ nào trong project trên ?
  - Để xử lý bất đồng bộ trong JS, ta sẽ sử dụng các callback. Khi hàm bất đồng bộ được chạy, và xử lý xong ta sẽ gọi các hàm callback để tục thực hiện các nhiệm vụ kế tiếp.
  - Trong xử lý bất đồng bộ, ta có thể sử dụng các kỹ thuật callback function đơn thuần, Promise và async – await.
  - Trong bài test, em đã xử lý bất đồng bộ ở dòng 43->60 trong file <PROJECT FOLDER>/src/App.js.
3. ReactJS, JQuery, Angular khác nhau như thế nào ?
  - ReactJS : 
    + Là thư viện để xây dựng giao diện người dùng. 
    + Chỉ xây dựng phần View trong MVC. 
  - JQuery : 
    + Là thư viện JS thao tác với DOM.
  - Angular : 
    + Là MVVM framework.
4. Trình bày về Floats và cách chúng hoạt động ?
  - Thuộc tính float là thuộc tính (là kỹ thuật) dùng để xác định cách thức trôi dạt (nổi) của phần tử so với khung chứa.
  - Cách thức hoạt động : Khi một thành phần áp dụng thuộc tính float, thì phần tử đó sẽ được "nổi lên", và trôi dạt theo hướng chỉ định và có xu hướng lấp đầy khung chứa.
5. Trình bày về z-index và làm thế nào để nội dung stack với nhau được định hình ?
  - Z-index là thuộc tính xác định "sự nổi" của element theo trục z.
  - Để Nội dung sack với nhau được định hình, ta sử dụng thêm thuộc tính position với 3 giá trị absolute, fixed hoặc relative.
6. Giải thích về CSS sprites và làm thế nào để bạn thực hiện chúng trên một trang web ?
  - CSS sprites là một kỹ thuật sử dụng một file ảnh lớn bao gồm các ảnh nhỏ trong đó, và hiện thị ảnh nhỏ cần thiết bằng cách truyền xác định vị trí của ảnh nhỏ và hiện thị.
  - Để thực hiện trên trang web
    + Ta cần một ảnh chứ các ảnh nhỏ cần hiển thị.
    + Sử dụng thuộc tính background-position(<độ dịch chuyển>) để hiện thị đúng vị trí của ảnh nhỏ đó.
