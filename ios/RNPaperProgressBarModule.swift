//
//  RNPaperProgressBarModule.swift
//  RNPaperProgressBarModule
//
//  Copyright © 2021 Abdul Haseeb. All rights reserved.
//

import Foundation

@objc(RNPaperProgressBarModule)
class RNPaperProgressBarModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
