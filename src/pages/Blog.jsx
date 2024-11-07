// BlogPage.jsx
import React from "react";

const BlogPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Blog Title</h1>

      <img
        src="https://images2.minutemediacdn.com/image/upload/c_crop,w_4066,h_2287,x_0,y_287/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01jbygdrzp72gjrrxa1c.jpg"
        alt="Blog post"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <p className="text-lg text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula
        dui nec arcu hendrerit, nec suscipit justo elementum. Phasellus euismod
        dolor ac sapien interdum sollicitudin. Nulla facilisi. In hac habitasse
        platea dictumst. Mauris non vehicula eros, ac vulputate massa. Curabitur
        volutpat, urna nec ultricies ultricies, nisi lorem gravida lacus, et
        fringilla arcu metus sit amet metus. Nullam posuere ipsum non justo
        tincidunt, sit amet congue ligula tincidunt. Suspendisse potenti.
      </p>
    </div>
  );
};

export default BlogPage;
