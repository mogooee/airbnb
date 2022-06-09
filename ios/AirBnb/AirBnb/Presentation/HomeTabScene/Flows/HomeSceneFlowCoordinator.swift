//
//  HomeTabSceneCoordinator.swift
//  AirBnb
//
//  Created by 송태환 on 2022/06/07.
//

import UIKit

protocol HomeSceneFlowCoordinatorDependencies {
  func makeHomeViewController() -> HomeViewController
  func makeLocationSearchViewController() -> LocationSearchController
}

final class HomeSceneFlowCoordinator: Coordinator {
  private let navigationController: UINavigationController
  private let dependencies: HomeSceneFlowCoordinatorDependencies

  init(navigationController: UINavigationController, dependencies: HomeSceneFlowCoordinatorDependencies) {
    self.navigationController = navigationController
    self.dependencies = dependencies
  }

  func start() {
    let viewController = dependencies.makeHomeViewController()
    navigationController.viewControllers = [viewController]
  }

  func showSearchLocation() {
    let viewController = dependencies.makeLocationSearchViewController()
		navigationController.pushViewController(viewController, animated: true)
  }
}
