// swift-tools-version: 5.6
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
  name: "Toolbox",
  platforms: [
    .iOS(.v15),
    .macOS(.v12)
  ],
  products: [
    // Products define the executables and libraries a package produces, and make them visible to other packages.
    .library(
      name: "Toolbox",
      targets: ["Toolbox"]
    )
  ],
  dependencies: [
    // Dependencies declare other packages that this package depends on.
    // .package(url: /* package url */, from: "1.0.0"),
    .package(url: "https://github.com/nicklockwood/SwiftFormat", from: "0.49.0"),
    .package(url: "https://github.com/SnapKit/SnapKit.git", .upToNextMajor(from: "5.6.0")),
    .package(url: "https://github.com/ReactiveX/RxSwift.git", branch: "6.5.0"),
    .package(url: "https://github.com/Alamofire/Alamofire.git", .upToNextMajor(from: "5.6.1"))
  ],
  targets: [
    // Targets are the basic building blocks of a package. A target can define a module or a test suite.
    // Targets can depend on other targets in this package, and on products in packages this package depends on.
    .target(
      name: "Toolbox",
      dependencies: [
        "RxSwift",
        .product(name: "RxCocoa", package: "RxSwift"),
        "SnapKit",
        "Alamofire"
      ]
    ),
    .testTarget(
      name: "ToolboxTests",
      dependencies: ["Toolbox"]
    )
  ]
)
