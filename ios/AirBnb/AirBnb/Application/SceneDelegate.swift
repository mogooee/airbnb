//
//  SceneDelegate.swift
//  AirBnb
//
//  Created by 송태환 on 2022/05/23.
//

import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {
  var window: UIWindow?

  func scene(_ scene: UIScene, willConnectTo _: UISceneSession, options _: UIScene.ConnectionOptions) {
    guard let scene = (scene as? UIWindowScene) else {
      return
    }

    let tabBarController = UITabBarController()
    let navigationController = UINavigationController(rootViewController: tabBarController)
    let homeController = HomeController()
    let wishListController = WishListViewController()
    let reservationController = ReservationViewController()

    homeController.tabBarItem = .init(
      title: "검색",
      image: .magnifier,
      selectedImage: .magnifier
    )

    wishListController.tabBarItem = .init(
      title: "위시리스트",
      image: .heart,
      selectedImage: .heartFilled
    )

    reservationController.tabBarItem = .init(
      title: "예약",
      image: .profile,
      selectedImage: .profileFilled
    )

    tabBarController.viewControllers = [
      homeController,
      wishListController,
      reservationController
    ]

    self.window = UIWindow(windowScene: scene)
    self.window?.rootViewController = navigationController
    self.window?.makeKeyAndVisible()
  }
}
