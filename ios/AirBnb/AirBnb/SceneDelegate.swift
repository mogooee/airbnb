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

    self.window = UIWindow(windowScene: scene)

    self.window?.rootViewController = ViewController()

    self.window?.makeKeyAndVisible()
  }
}
