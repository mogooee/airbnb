# airbnb
그룹 프로젝트 #4 

[✨ 데모페이지](https://mogooee.github.io/airbnb/)
# **🧑‍💻 팀원**
### [ALEX](https://github.com/SongTaehwan) 
> 한 주간 즐코, 빡코합시다 ㅋㅋ
### [선을로](https://github.com/fpzk5656)
> 한 주간, 잘 학습 하는 시간이 되었으면 좋겠습니다!
### [DOTORI](https://github.com/mogooee)
> 한 주동안 재밌게 해봅시다 🤗
# **💡 그라운드 룰**
- 10:00~10:30 줌에서 데일리 스크럼 진행
- 질문 사항은 슬랙 DM으로, 필
- 주간회고는 목요일 저녁 5:30~6:00
# **🛠 브랜치 전략** 
- git flow 전략 
  - feature branch를 통한 개발이 끝나면 PR을 통해 develop branch에 merge한다.
```
team-03
    |
    |--> develop
    |      |
    |      |--> feature...
```
- team-03 : 메인 배포 브랜치
- dev-BE : BE 브랜치
- dev-FE : FE 브랜치
- dev-IOS : IOS 브랜치
- `feat-fe/{feature_issue_number}`: 프론트엔드 기능별 브랜치
- `feat-be/{feature_issue_number}`: 백엔드 기능별 브랜치
- `feat-ios/{feature_issue_number}`: ios 기능별 브랜치
- 주차별 개발 목표를 각자 milestone으로 설정한다.
# **🔥 Commit Rule**

| 타입     | 설명                                                       |
| -------- | ---------------------------------------------------------- |
| feat     | 기능 추가, 구현                                            |
| fix      | 버그 수정                                                  |
| rename   | 파일, 폴더 명 변경                                         |
| remove   | 파일, 폴더 삭제                                            |
| move     | 파일, 폴더 위치 변경                                       |
| design   | CSS 등 사용자 UI 디자인 변경                               |
| refactor | 리팩토링                                                   |
| comment  | 필요한 주석 추가 변경 삭제                                 |
| chore    | 빌드 테스트 업데이트, 패키지 매니저 설정 등 -> 코드 변경 x |
| docs     | 문서 수정 (ex. readme)                                     |
| test     | 테스트 코드                                    |
