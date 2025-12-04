<template>
    <header class="app-topbar">
        <div class="page-container topbar-menu">
            <div class="d-flex align-items-center gap-2">
                <!-- Sidebar Menu Toggle Button -->
                <button class="sidenav-toggle-button px-2">
                    <i class="ti ti-menu-deep fs-24"></i>
                </button>

                <!-- Horizontal Menu Toggle Button -->
                <button class="topnav-toggle-button px-2" data-bs-toggle="collapse"
                    data-bs-target="#topnav-menu-content">
                    <i class="ti ti-menu-deep fs-22"></i>
                </button>

            </div>

            <div class="d-flex align-items-center gap-2">
                <!-- Notification Dropdown -->
                <div class="topbar-item">
                    <div class="dropdown">
                        <button class="topbar-link dropdown-toggle drop-arrow-none" data-bs-toggle="dropdown"
                            data-bs-offset="0,25" type="button" data-bs-auto-close="outside" aria-haspopup="false"
                            aria-expanded="false">
                            <i class="ti ti-bell animate-ring fs-22"></i>
                            <span class="noti-icon-badge"></span>
                        </button>

                        <div class="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg" style="min-height: 300px">
                            <div class="p-3 border-bottom border-dashed">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h6 class="m-0 fs-16 fw-semibold">Notifications</h6>
                                    </div>
                                    <div class="col-auto">
                                        <div class="dropdown">
                                            <a href="#" class="dropdown-toggle drop-arrow-none link-dark"
                                                data-bs-toggle="dropdown" data-bs-offset="0,15" aria-expanded="false">
                                                <i class="ti ti-settings fs-22 align-middle"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <!-- item-->
                                                <a href="javascript:void(0);" class="dropdown-item">Mark as Read</a>
                                                <!-- item-->
                                                <a href="javascript:void(0);" class="dropdown-item">Delete All</a>
                                                <!-- item-->
                                                <a href="javascript:void(0);" class="dropdown-item">Do not
                                                    Disturb</a>
                                                <!-- item-->
                                                <a href="javascript:void(0);" class="dropdown-item">Other
                                                    Settings</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="position-relative z-2 card shadow-none rounded-0" style="max-height: 300px"
                                data-simplebar>
                                <!-- item-->
                                <div class="dropdown-item notification-item py-2 text-wrap active" id="notification-1">
                                    <span class="d-flex align-items-center">
                                        <span class="me-3 position-relative flex-shrink-0">
                                            <img src="@template/dashboard/images/users/avatar-2.jpg"
                                                class="avatar-md rounded-circle" alt="" />
                                            <span class="position-absolute rounded-pill bg-danger notification-badge">
                                                <i class="ti ti-message-circle"></i>
                                                <span class="visually-hidden">unread messages</span>
                                            </span>
                                        </span>
                                        <span class="flex-grow-1 text-muted">
                                            <span class="fw-medium text-body">Glady Haid</span> commented on
                                            <span class="fw-medium text-body">paces admin status</span>
                                            <br />
                                            <span class="fs-12">25m ago</span>
                                        </span>
                                        <span class="notification-item-close">
                                            <button type="button"
                                                class="btn btn-ghost-danger rounded-circle btn-sm btn-icon"
                                                data-dismissible="#notification-1">
                                                <i class="ti ti-x fs-16"></i>
                                            </button>
                                        </span>
                                    </span>
                                </div>

                                <!-- item-->
                                <div class="dropdown-item notification-item py-2 text-wrap" id="notification-2">
                                    <span class="d-flex align-items-center">
                                        <span class="me-3 position-relative flex-shrink-0">
                                            <img src="@template/dashboard/images/users/avatar-4.jpg"
                                                class="avatar-md rounded-circle" alt="" />
                                            <span class="position-absolute rounded-pill bg-info notification-badge">
                                                <i class="ti ti-currency-dollar"></i>
                                                <span class="visually-hidden">unread messages</span>
                                            </span>
                                        </span>
                                        <span class="flex-grow-1 text-muted">
                                            <span class="fw-medium text-body">Tommy Berry</span> donated
                                            <span class="text-success">$100.00</span> for
                                            <span class="fw-medium text-body">Carbon removal program</span>
                                            <br />
                                            <span class="fs-12">58m ago</span>
                                        </span>
                                        <span class="notification-item-close">
                                            <button type="button"
                                                class="btn btn-ghost-danger rounded-circle btn-sm btn-icon"
                                                data-dismissible="#notification-2">
                                                <i class="ti ti-x fs-16"></i>
                                            </button>
                                        </span>
                                    </span>
                                </div>

                                <!-- item-->
                                <div class="dropdown-item notification-item py-2 text-wrap" id="notification-3">
                                    <span class="d-flex align-items-center">
                                        <div class="avatar-md flex-shrink-0 me-3">
                                            <span
                                                class="avatar-title bg-success-subtle text-success rounded-circle fs-22">
                                                <iconify-icon icon="solar:wallet-money-bold-duotone"></iconify-icon>
                                            </span>
                                        </div>
                                        <span class="flex-grow-1 text-muted">
                                            You withdraw a <span class="fw-medium text-body">$500</span> by
                                            <span class="fw-medium text-body">New York ATM</span>
                                            <br />
                                            <span class="fs-12">2h ago</span>
                                        </span>
                                        <span class="notification-item-close">
                                            <button type="button"
                                                class="btn btn-ghost-danger rounded-circle btn-sm btn-icon"
                                                data-dismissible="#notification-3">
                                                <i class="ti ti-x fs-16"></i>
                                            </button>
                                        </span>
                                    </span>
                                </div>

                                <!-- item-->
                                <div class="dropdown-item notification-item py-2 text-wrap" id="notification-4">
                                    <span class="d-flex align-items-center">
                                        <span class="me-3 position-relative flex-shrink-0">
                                            <img src="@template/dashboard/images/users/avatar-7.jpg"
                                                class="avatar-md rounded-circle" alt="" />
                                            <span
                                                class="position-absolute rounded-pill bg-secondary notification-badge">
                                                <i class="ti ti-plus"></i>
                                                <span class="visually-hidden">unread messages</span>
                                            </span>
                                        </span>
                                        <span class="flex-grow-1 text-muted">
                                            <span class="fw-medium text-body">Richard Allen</span> followed
                                            you in <span class="fw-medium text-body">Facebook</span>
                                            <br />
                                            <span class="fs-12">3h ago</span>
                                        </span>
                                        <span class="notification-item-close">
                                            <button type="button"
                                                class="btn btn-ghost-danger rounded-circle btn-sm btn-icon"
                                                data-dismissible="#notification-4">
                                                <i class="ti ti-x fs-16"></i>
                                            </button>
                                        </span>
                                    </span>
                                </div>

                                <!-- item-->
                                <div class="dropdown-item notification-item py-2 text-wrap" id="notification-5">
                                    <span class="d-flex align-items-center">
                                        <span class="me-3 position-relative flex-shrink-0">
                                            <img src="@template/dashboard/images/users/avatar-10.jpg"
                                                class="avatar-md rounded-circle" alt="" />
                                            <span class="position-absolute rounded-pill bg-danger notification-badge">
                                                <i class="ti ti-heart-filled"></i>
                                                <span class="visually-hidden">unread messages</span>
                                            </span>
                                        </span>
                                        <span class="flex-grow-1 text-muted">
                                            <span class="fw-medium text-body">Victor Collier</span> liked you
                                            recent photo in <span class="fw-medium text-body">Instagram</span>
                                            <br />
                                            <span class="fs-12">10h ago</span>
                                        </span>
                                        <span class="notification-item-close">
                                            <button type="button"
                                                class="btn btn-ghost-danger rounded-circle btn-sm btn-icon"
                                                data-dismissible="#notification-5">
                                                <i class="ti ti-x fs-16"></i>
                                            </button>
                                        </span>
                                    </span>
                                </div>
                            </div>

                            <div style="height: 300px"
                                class="d-flex align-items-center justify-content-center text-center position-absolute top-0 bottom-0 start-0 end-0 z-1">
                                <div>
                                    <iconify-icon icon="line-md:bell-twotone-alert-loop"
                                        class="fs-80 text-secondary mt-2"></iconify-icon>
                                    <h4 class="fw-semibold mb-0 fst-italic lh-base mt-3">
                                        Hey! 👋 <br />You have no any notifications
                                    </h4>
                                </div>
                            </div>

                            <!-- All-->
                            <a href="javascript:void(0);"
                                class="dropdown-item notification-item position-fixed z-2 bottom-0 text-center text-reset text-decoration-underline link-offset-2 fw-bold notify-item border-top border-light py-2">
                                View All
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Light/Dark Mode Button -->
                <div class="topbar-item d-none d-sm-flex">
                    <button class="topbar-link" id="light-dark-mode" type="button">
                        <i class="ti ti-moon fs-22"></i>
                    </button>
                </div>

                <!-- User Dropdown -->
                <div class="topbar-item nav-user">
                    <div class="dropdown">
                        <a class="topbar-link dropdown-toggle drop-arrow-none px-2" data-bs-toggle="dropdown"
                            data-bs-offset="0,19" type="button" aria-haspopup="false" aria-expanded="false">
                            <img src="@template/dashboard/images/users/avatar-1.jpg" width="32"
                                class="rounded-circle me-lg-2 d-flex" alt="user-image" />
                            <span class="d-lg-flex flex-column gap-1 d-none">
                                <h5 class="my-0">Dhanoo K.</h5>
                                <h6 class="my-0 fw-normal">Premium</h6>
                            </span>
                            <i class="ti ti-chevron-down d-none d-lg-block align-middle ms-2"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                            <!-- item-->
                            <div class="dropdown-header noti-title">
                                <h6 class="text-overflow m-0">Welcome !</h6>
                            </div>

                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item">
                                <i class="ti ti-user-hexagon me-1 fs-17 align-middle"></i>
                                <span class="align-middle">My Account</span>
                            </a>

                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item">
                                <i class="ti ti-wallet me-1 fs-17 align-middle"></i>
                                <span class="align-middle">Wallet : <span class="fw-semibold">$985.25</span></span>
                            </a>

                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item">
                                <i class="ti ti-settings me-1 fs-17 align-middle"></i>
                                <span class="align-middle">Settings</span>
                            </a>

                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item">
                                <i class="ti ti-lifebuoy me-1 fs-17 align-middle"></i>
                                <span class="align-middle">Support</span>
                            </a>

                            <div class="dropdown-divider"></div>

                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item">
                                <i class="ti ti-lock-square-rounded me-1 fs-17 align-middle"></i>
                                <span class="align-middle">Lock Screen</span>
                            </a>

                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item active fw-semibold text-danger">
                                <i class="ti ti-logout me-1 fs-17 align-middle"></i>
                                <span class="align-middle">Sign Out</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
