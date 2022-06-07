//
//  HomeTabSceneCoordinator.swift
//  AirBnb
//
//  Created by 송태환 on 2022/06/07.
//

import UIKit

protocol HomeTabFlowCoordinatorDependencies {}

final class HomeTabFlowCoordinator {
  private let dependencies: HomeTabFlowCoordinatorDependencies

  init(dependencies: HomeTabFlowCoordinatorDependencies) {
    self.dependencies = dependencies
  }

  func start() {}
}
