import React from 'react';

const AdminDashboard = () => {
    return (
        <div>
            <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1" open>
                <summary className="collapse-title font-semibold">How do I create an account?</summary>
                <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
            </details>
            <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
                <summary className="collapse-title font-semibold">I forgot my password. What should I do?</summary>
                <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
            </details>
            <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
                <summary className="collapse-title font-semibold">How do I update my profile information?</summary>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </details>

            <div className="carousel rounded-box">
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                        alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                        alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                        alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                        alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                        alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                        alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                        alt="Burger" />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;