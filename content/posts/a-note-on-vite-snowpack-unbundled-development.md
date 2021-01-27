---
title: "A Note on Vite and Snowpack: Unbundled Development"
thumbnail: "/images/a-note-on-vite-snowpack-unbundled-development/snowpack-build-pipeline.png"
description: "Unbundled development là gì và vì sao Vite hay Snowpack lại nhanh như vậy?"
date: 2021-01-26T15:47:50+07:00
draft: false
tags:
  - front-end
  - vite
  - snowpack
  - unbundled development
categories:
  - notes
keywords:
  - vite
  - snowpack
  - unbundled development
  - frontend
  - front-end
  - build tool
---

## Giới thiệu một chút về Vite và Snowpack

Vite là một front-end build tool mới được phat triển bởi Evan You - creator của Vue.js. Snowpack cũng là một build tool mới được phát triển. Cả 2 đều được thiết kế để phục vụ cho mô hình web hiện đại (modern web) và cực kỳ nhanh, ngoài ra còn có workflow đơn giản hơn so với những build tool trước đây. Thứ tạo nên sức mạnh và tốc độ của 2 tool này đến từ một cơ chế hoạt động mới, đó chính là `unbundled development`

## Tại sao lại là Unbundled Development?

Để nói về `unbundled development` , đầu tiên chúng ta sẽ cần nhắc đến một số khái niệm cần biết.

### ECMAScript 6+

Chắc hẳn không còn lạ lẫm với cái tên này nữa rồi, nhưng mà mình cũng muốn nhắc lại một chút cho những ai chưa biết. Javascript mà các bạn code hiện nay và Javascript thuở hồng hoang không giống nhau. ECMAScript là một chuẩn, một tập hợp một số các kỹ thuật nâng cao của Javascript được cập nhật thêm vào Javascript để giúp ngôn ngữ này trở nên tốt hơn. Những thứ như `const`, `let`, `promise`, `async/await`, `rest/spread` đều đến từ ES6 và các phiên bản mới hơn.

Và bởi vì là phiên bản mới hơn nên không phải browser nào cũng hỗ trợ nó cả, đa số những browser cũ đều chỉ hỗ trợ đến ES5. Đây là một pain point lớn của người làm front-end khi bắt buộc phải support các browser cũ như IE11. Để giải quyết điều đó thì những build tool hiện tại cung cấp cho ta khả năng transpile cú pháp của ES6+ trở về ES5 và giúp chúng có thể chạy trên những browser cũ.

### JS Module Definition

Trước khi ES6 ra đời cũng với `ES Modules`, thì việc làm việc với JS có nhiều file rất phức tạp (thường thông qua global context), từ đó mới sinh ra nhiều chuẩn module khác nhau, như là `AMD` (RequireJS), `CommonJS`(CJS của NodeJS), `UMD` để có thể kết hợp nhiều module khi làm việc với JS.

### Bundled Development

Đây là chính là cách mà lâu nay chúng ta sử dụng (webpack hay parcel). Bởi vì source code của chúng ta có thể sẽ không được browser hỗ trợ, nên sẽ phải trải qua các bước transpile - compile (về cú pháp), sau đó bundle lại thành 1 file lớn (hoặc một số chunk nhỏ hơn). Lý do chính chúng ta chọn bundle lại là bởi vì browser không hiểu được Module Definition của chúng ta.
Vì vậy, mỗi lần chúng ta save file, build tool cũng sẽ phải thực hiện transpile - bundle lại một phần, hoặc tất cả. Mà quá trình này rất mất thời gian.

### Unbundled Development

Ý tưởng của `Unbundled Development` đến từ việc `ES Module` trở thành official module definition của JS, và những browser mới hiện tại đã support đầy đủ chuẩn ECMAScript mới nhất. Vì vậy chúng ta có thể bỏ qua một phần bước transpile và toàn bộ bước bundle để chuyển thẳng code xuống browser. Quá trình này diễn ra chỉ tốn một vài mili giây vì những công việc nặng nhọc có thể tốn đến vài giây đã được loại bỏ. Ngoài ra những file này còn tận dụng được tối đa sức mạnh của cache.

Bởi vì trong quá trình development, chúng ta chỉ đa số sử dụng những browser mới nhất nên approach này là hợp lý. Nhưng nếu là production, chúng ta phải xem xét kỹ có cần phải support những browser cũ hơn hay không để chọn ra approach phù hợp để build production và cả test nữa.

![Snowpack vs Webpack](/images/a-note-on-vite-snowpack-unbundled-development/snowpack-vs-webpack.jpeg)

## Notes

Vite hay Snowpack đều là framework-agnostic, đều support tất cả các framework - library như React - Preact, Vue hay Svelte. Nhưng Vite support tốt hơn cho Vue, và Snowpack thì support tốt hơn cho Svelte.

Vite hay Snowpack đều support HMR, và HMR kết hợp với unbundled development thực sự tạo ra một tốc độ đáng kinh ngạc, có thể nói là cập nhật tức thì, cho dù application rất lớn.

Vite vẫn dùng bundle cho production (để support những browser cũ) dựa vào Roll-up (vì Roll-up based on ES Modules nên có thể tạo ra những bản build nhỏ hơn, optimize hơn). Snowpack cũng vậy nhưng cho phép người dùng chọn `esbuild` hoặc `webpack`. Ngoài ra Snowpack mặc định cũng sử dụng unbundled cho production (quả thật là designed for the modern web).

Vite và cả Snowpack đều sử dụng `esbuild` transform API để transpile `typescript`, đây cũng là một phần giúp cho tốc độ của cả 2 trở nên nổi bật.

Nhìn chung thì Vite và Snowpack khá giống nhau, nhưng Vite more opinionated, và không cần phải config nhiều như Snowpack.

Ngoài ra hiện tại ở phiên bản beta cũng có một optimization khá hay: Vite sẽ dùng esbuild để pre-bundling những dependency.

Snowpack cũng không thiệt thòi với những feature rất hay như `streaming imports`.
