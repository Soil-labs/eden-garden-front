import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type ErrorLog = {
  __typename?: 'ErrorLog';
  _id: Scalars['ID'];
  code?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  stacktrace?: Maybe<Array<Maybe<Scalars['String']>>>;
  user?: Maybe<User>;
};

export type Members = {
  __typename?: 'Members';
  _id?: Maybe<Scalars['ID']>;
  archiveProjects?: Maybe<Array<Maybe<Scalars['String']>>>;
  attributes?: Maybe<AttributesType>;
  bio?: Maybe<Scalars['String']>;
  content?: Maybe<ContentType>;
  discordAvatar?: Maybe<Scalars['String']>;
  discordName?: Maybe<Scalars['String']>;
  discriminator?: Maybe<Scalars['String']>;
  hoursPerWeek?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['String']>;
  invitedBy?: Maybe<MembersSmallType>;
  links?: Maybe<Array<Maybe<LinkType>>>;
  network?: Maybe<Array<Maybe<Members>>>;
  previusProjects?: Maybe<Array<Maybe<PreviusProjectsType>>>;
  projects?: Maybe<Array<Maybe<ProjectMemberType>>>;
  registeredAt?: Maybe<Scalars['String']>;
  serverID?: Maybe<Array<Maybe<Scalars['String']>>>;
  skills?: Maybe<Array<Maybe<SkillType_Member>>>;
  timeZone?: Maybe<Scalars['String']>;
  tweets?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MembersSmallType = {
  __typename?: 'MembersSmallType';
  _id?: Maybe<Scalars['ID']>;
  discordAvatar?: Maybe<Scalars['String']>;
  discordName?: Maybe<Scalars['String']>;
  discriminator?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addFavoriteProject?: Maybe<Members>;
  addNewMember?: Maybe<Members>;
  addSkillToMember?: Maybe<Members>;
  approveOrRejectSkill?: Maybe<Skills>;
  approveTweet?: Maybe<Project>;
  changeTeamMember_Phase_Project?: Maybe<Project>;
  createApprovedSkill?: Maybe<Skills>;
  createNewTeam?: Maybe<Team>;
  createProjectUpdate?: Maybe<ProjectUpdate>;
  createSkill?: Maybe<Skills>;
  createSkills?: Maybe<Array<Maybe<Skills>>>;
  endorseAttribute?: Maybe<Members>;
  login: User;
  newTweetProject?: Maybe<TweetsProject>;
  updateMember?: Maybe<Members>;
  updateProject?: Maybe<Project>;
  updateRoleTemplate?: Maybe<RoleTemplate>;
  updateServer?: Maybe<ServerTemplate>;
  updateSkillCategory?: Maybe<SkillCategory>;
};


export type MutationAddFavoriteProjectArgs = {
  fields: AddFavoriteProjectInput;
};


export type MutationAddNewMemberArgs = {
  fields: AddNewMemberInput;
};


export type MutationAddSkillToMemberArgs = {
  fields: AddSkillToMember_Input;
};


export type MutationApproveOrRejectSkillArgs = {
  fields?: InputMaybe<ApproveOrRejectSkillInput>;
};


export type MutationApproveTweetArgs = {
  fields: ApproveTweetInput;
};


export type MutationChangeTeamMember_Phase_ProjectArgs = {
  fields: ChangeTeamMember_Phase_ProjectInput;
};


export type MutationCreateApprovedSkillArgs = {
  fields?: InputMaybe<CreateApprovedSkillInput>;
};


export type MutationCreateNewTeamArgs = {
  fields: CreateNewTeamInput;
};


export type MutationCreateProjectUpdateArgs = {
  fields: CreateProjectUpdateInput;
};


export type MutationCreateSkillArgs = {
  fields?: InputMaybe<CreateSkillInput>;
};


export type MutationCreateSkillsArgs = {
  fields?: InputMaybe<CreateSkillsInput>;
};


export type MutationEndorseAttributeArgs = {
  fields: EndorseAttributeInput;
};


export type MutationLoginArgs = {
  fields: LoginInput;
};


export type MutationNewTweetProjectArgs = {
  fields: NewTweetProjectInput;
};


export type MutationUpdateMemberArgs = {
  fields: UpdateMemberInput;
};


export type MutationUpdateProjectArgs = {
  fields: UpdateProjectInput;
};


export type MutationUpdateRoleTemplateArgs = {
  fields?: InputMaybe<CreateRoleInput>;
};


export type MutationUpdateServerArgs = {
  fields?: InputMaybe<UpdateServerInput>;
};


export type MutationUpdateSkillCategoryArgs = {
  fields?: InputMaybe<UpdateSkillCategoryInput>;
};

export type Project = {
  __typename?: 'Project';
  _id?: Maybe<Scalars['ID']>;
  budget?: Maybe<BudgetType>;
  champion?: Maybe<Members>;
  collaborationLinks?: Maybe<Array<Maybe<CollaborationLinksType>>>;
  dates?: Maybe<DatesType>;
  description?: Maybe<Scalars['String']>;
  role?: Maybe<Array<Maybe<RoleType>>>;
  serverID?: Maybe<Array<Maybe<Scalars['String']>>>;
  stepsJoinProject?: Maybe<Array<Maybe<Scalars['String']>>>;
  team?: Maybe<Array<Maybe<TeamType>>>;
  title?: Maybe<Scalars['String']>;
  tweets?: Maybe<Array<Maybe<TweetsType>>>;
};

export type ProjectUpdate = {
  __typename?: 'ProjectUpdate';
  _id?: Maybe<Scalars['ID']>;
  author?: Maybe<Members>;
  content?: Maybe<Scalars['String']>;
  members?: Maybe<Array<Maybe<Members>>>;
  projects?: Maybe<Project>;
  registeredAt?: Maybe<Scalars['String']>;
  serverID?: Maybe<Array<Maybe<Scalars['String']>>>;
  team?: Maybe<Array<Maybe<Team>>>;
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  adminFindAllSkillsEveryState?: Maybe<Array<Maybe<Skills>>>;
  errors?: Maybe<Array<Maybe<ErrorLog>>>;
  findAllProjectsTeamsAnouncments?: Maybe<Array<Maybe<FindAllProjectsTeamsAnouncmentsOutput>>>;
  findMember?: Maybe<Members>;
  findMembers?: Maybe<Array<Maybe<Members>>>;
  findProject?: Maybe<Project>;
  findProjectUpdates?: Maybe<Array<Maybe<ProjectUpdate>>>;
  findProjects?: Maybe<Array<Maybe<Project>>>;
  findProjects_RecommendedToUser?: Maybe<Array<Maybe<ProjectMatchType>>>;
  findProjects_RequireSkill?: Maybe<Array<Maybe<Project>>>;
  findRoleTemplate?: Maybe<RoleTemplate>;
  findRoleTemplates?: Maybe<Array<Maybe<RoleTemplate>>>;
  findServers?: Maybe<Array<Maybe<ServerTemplate>>>;
  findSkill?: Maybe<Skills>;
  findSkillCategories?: Maybe<Array<Maybe<SkillCategory>>>;
  findSkillCategory?: Maybe<SkillCategory>;
  findSkills?: Maybe<Array<Maybe<Skills>>>;
  findTeams?: Maybe<Array<Maybe<Team>>>;
  matchMembersToSkills?: Maybe<Array<Maybe<MatchMembersToSkillOutput>>>;
  matchMembersToUser?: Maybe<Array<Maybe<MatchMembersToUserOutput>>>;
  match_projectToUser?: Maybe<ProjectUserMatchType>;
  waitingToAproveSkills?: Maybe<Array<Maybe<Skills>>>;
};


export type QueryAdminFindAllSkillsEveryStateArgs = {
  fields?: InputMaybe<FindSkillsInput>;
};


export type QueryFindAllProjectsTeamsAnouncmentsArgs = {
  fields?: InputMaybe<FindAllProjectsTeamsAnouncmentsInput>;
};


export type QueryFindMemberArgs = {
  fields?: InputMaybe<FindMemberInput>;
};


export type QueryFindMembersArgs = {
  fields?: InputMaybe<FindMembersInput>;
};


export type QueryFindProjectArgs = {
  fields?: InputMaybe<FindProjectInput>;
};


export type QueryFindProjectUpdatesArgs = {
  fields?: InputMaybe<FindProjectUpdatesInput>;
};


export type QueryFindProjectsArgs = {
  fields?: InputMaybe<FindProjectsInput>;
};


export type QueryFindProjects_RecommendedToUserArgs = {
  fields?: InputMaybe<FindProjects_RecommendedToUserInput>;
};


export type QueryFindProjects_RequireSkillArgs = {
  fields?: InputMaybe<FindProjects_RequireSkillInput>;
};


export type QueryFindRoleTemplateArgs = {
  fields?: InputMaybe<FindRoleTemplateInput>;
};


export type QueryFindRoleTemplatesArgs = {
  fields?: InputMaybe<FindRoleTemplatesInput>;
};


export type QueryFindServersArgs = {
  fields?: InputMaybe<FindServersInput>;
};


export type QueryFindSkillArgs = {
  fields?: InputMaybe<FindSkillInput>;
};


export type QueryFindSkillCategoriesArgs = {
  fields?: InputMaybe<FindSkillCategoriesInput>;
};


export type QueryFindSkillCategoryArgs = {
  fields?: InputMaybe<FindSkillCategoryInput>;
};


export type QueryFindSkillsArgs = {
  fields?: InputMaybe<FindSkillsInput>;
};


export type QueryFindTeamsArgs = {
  fields?: InputMaybe<FindTeamsInput>;
};


export type QueryMatchMembersToSkillsArgs = {
  fields?: InputMaybe<MatchMembersToSkillInput>;
};


export type QueryMatchMembersToUserArgs = {
  fields?: InputMaybe<MatchMembersToUserInput>;
};


export type QueryMatch_ProjectToUserArgs = {
  fields?: InputMaybe<Match_ProjectToUserInput>;
};


export type QueryWaitingToAproveSkillsArgs = {
  fields?: InputMaybe<FindSkillsInput>;
};

export type RoleTemplate = {
  __typename?: 'RoleTemplate';
  _id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Maybe<Skills>>>;
  title?: Maybe<Scalars['String']>;
};

export type ServerTemplate = {
  __typename?: 'ServerTemplate';
  _id?: Maybe<Scalars['ID']>;
  adminCommands?: Maybe<Array<Maybe<Scalars['String']>>>;
  adminID?: Maybe<Array<Maybe<Scalars['String']>>>;
  adminRoles?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
};

export type SkillCategory = {
  __typename?: 'SkillCategory';
  _id?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Maybe<Skills>>>;
};

export type Skills = {
  __typename?: 'Skills';
  _id?: Maybe<Scalars['ID']>;
  authors?: Maybe<Array<Maybe<Members>>>;
  members?: Maybe<Array<Maybe<Members>>>;
  name?: Maybe<Scalars['String']>;
  registeredAt?: Maybe<Scalars['String']>;
  state?: Maybe<ApprovedSkillEnum>;
  tweets?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Team = {
  __typename?: 'Team';
  _id?: Maybe<Scalars['ID']>;
  champion?: Maybe<Array<Maybe<Members>>>;
  description?: Maybe<Scalars['String']>;
  members?: Maybe<Array<Maybe<Members>>>;
  name?: Maybe<Scalars['String']>;
  projects?: Maybe<Project>;
  serverID?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  isPasswordRandom?: Maybe<Scalars['Boolean']>;
  lastname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  registeredAt?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type AddFavoriteProjectInput = {
  favorite?: InputMaybe<Scalars['Boolean']>;
  memberID?: InputMaybe<Scalars['ID']>;
  projectID?: InputMaybe<Scalars['ID']>;
};

export type AddNewMemberInput = {
  _id?: InputMaybe<Scalars['ID']>;
  bio?: InputMaybe<Scalars['String']>;
  discordAvatar?: InputMaybe<Scalars['String']>;
  discordName?: InputMaybe<Scalars['String']>;
  discriminator?: InputMaybe<Scalars['String']>;
  hoursPerWeek?: InputMaybe<Scalars['Float']>;
  invitedBy?: InputMaybe<Scalars['String']>;
  previusProjects?: InputMaybe<Array<InputMaybe<PreviusProjectsInput>>>;
  serverID?: InputMaybe<Scalars['String']>;
};

export type AddSkillToMember_Input = {
  authorID?: InputMaybe<Scalars['ID']>;
  memberID?: InputMaybe<Scalars['ID']>;
  serverID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skillID?: InputMaybe<Scalars['ID']>;
};

export type ApproveOrRejectSkillInput = {
  _id?: InputMaybe<Scalars['ID']>;
  state?: InputMaybe<ApprovedSkillEnum>;
};

export type ApproveTweetInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  projectID?: InputMaybe<Scalars['ID']>;
  tweetID?: InputMaybe<Scalars['ID']>;
};

export enum ApprovedSkillEnum {
  Approved = 'approved',
  Rejected = 'rejected',
  Waiting = 'waiting'
}

export enum AttributesEnum {
  Coordinator = 'Coordinator',
  Director = 'Director',
  Helper = 'Helper',
  Inspirer = 'Inspirer',
  Motivator = 'Motivator',
  Observer = 'Observer',
  Reformer = 'Reformer',
  Supporter = 'Supporter'
}

export type AttributesType = {
  __typename?: 'attributesType';
  Coordinator?: Maybe<Scalars['Int']>;
  Director?: Maybe<Scalars['Int']>;
  Helper?: Maybe<Scalars['Int']>;
  Inspirer?: Maybe<Scalars['Int']>;
  Motivator?: Maybe<Scalars['Int']>;
  Observer?: Maybe<Scalars['Int']>;
  Reformer?: Maybe<Scalars['Int']>;
  Supporter?: Maybe<Scalars['Int']>;
};

export type BudgetInput = {
  perHour?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  totalBudget?: InputMaybe<Scalars['String']>;
};

export type BudgetType = {
  __typename?: 'budgetType';
  perHour?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  totalBudget?: Maybe<Scalars['String']>;
};

export type ChangeTeamMember_Phase_ProjectInput = {
  memberID?: InputMaybe<Scalars['ID']>;
  phase?: InputMaybe<PhaseType>;
  projectID?: InputMaybe<Scalars['ID']>;
};

export type CollaborationLinksInput = {
  link?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CollaborationLinksType = {
  __typename?: 'collaborationLinksType';
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentInput = {
  interest?: InputMaybe<Scalars['String']>;
  mostProud?: InputMaybe<Scalars['String']>;
  showCaseAbility?: InputMaybe<Scalars['String']>;
};

export type ContentType = {
  __typename?: 'contentType';
  interest?: Maybe<Scalars['String']>;
  mostProud?: Maybe<Scalars['String']>;
  showCaseAbility?: Maybe<Scalars['String']>;
};

export type CreateApprovedSkillInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type CreateNewTeamInput = {
  _id?: InputMaybe<Scalars['ID']>;
  championID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  memberID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  projectID?: InputMaybe<Scalars['String']>;
  serverID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CreateProjectUpdateInput = {
  _id?: InputMaybe<Scalars['ID']>;
  authorID?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  memberID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  projectID?: InputMaybe<Scalars['String']>;
  serverID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  teamID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateRoleInput = {
  _id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateSkillInput = {
  name?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<ApprovedSkillEnum>;
};

export type CreateSkillsInput = {
  names?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state?: InputMaybe<ApprovedSkillEnum>;
};

export type DatesInput = {
  complition?: InputMaybe<Scalars['String']>;
  kickOff?: InputMaybe<Scalars['String']>;
};

export type DatesType = {
  __typename?: 'datesType';
  complition?: Maybe<Scalars['String']>;
  kickOff?: Maybe<Scalars['String']>;
};

export type EndorcmentInput = {
  registeredAt?: InputMaybe<Scalars['String']>;
  skillID?: InputMaybe<Scalars['ID']>;
};

export type EndorseAttributeInput = {
  _id?: InputMaybe<Scalars['ID']>;
  attribute?: InputMaybe<AttributesEnum>;
};

export type FindAllProjectsTeamsAnouncmentsInput = {
  _id?: InputMaybe<Scalars['ID']>;
};

export type FindAllProjectsTeamsAnouncmentsOutput = {
  __typename?: 'findAllProjectsTeamsAnouncmentsOutput';
  _id?: Maybe<Scalars['ID']>;
  project?: Maybe<Project>;
  team?: Maybe<Array<Maybe<TeamsType>>>;
};

export type FindMemberInput = {
  _id?: InputMaybe<Scalars['ID']>;
  serverID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FindMembersInput = {
  _id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  serverID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FindProjectInput = {
  _id?: InputMaybe<Scalars['ID']>;
  serverID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FindProjectUpdatesInput = {
  _id?: InputMaybe<Scalars['ID']>;
  memberID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  projectID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  serverID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  teamID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FindProjectsInput = {
  _id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  serverID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FindProjects_RecommendedToUserInput = {
  memberID?: InputMaybe<Scalars['ID']>;
  serverID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FindProjects_RequireSkillInput = {
  serverID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skillID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type FindRoleTemplateInput = {
  _id?: InputMaybe<Scalars['ID']>;
};

export type FindRoleTemplatesInput = {
  _id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type FindServersInput = {
  _id?: InputMaybe<Scalars['ID']>;
};

export type FindSkillCategoriesInput = {
  _id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type FindSkillCategoryInput = {
  _id?: InputMaybe<Scalars['ID']>;
};

export type FindSkillInput = {
  _id?: InputMaybe<Scalars['ID']>;
};

export type FindSkillsInput = {
  _id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type FindTeamsInput = {
  _id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  projectID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  serverID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum LevelEnum {
  Junior = 'junior',
  Learning = 'learning',
  Mid = 'mid',
  Senior = 'senior'
}

export type LinkInput = {
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type LinkType = {
  __typename?: 'linkType';
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type MatchMembersToSkillInput = {
  serverID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skillsID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type MatchMembersToSkillOutput = {
  __typename?: 'matchMembersToSkillOutput';
  commonSkills?: Maybe<Array<Maybe<Skills>>>;
  matchPercentage?: Maybe<Scalars['Float']>;
  member?: Maybe<Members>;
};

export type MatchMembersToUserInput = {
  memberID?: InputMaybe<Scalars['ID']>;
  serverID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MatchMembersToUserOutput = {
  __typename?: 'matchMembersToUserOutput';
  commonSkills?: Maybe<Array<Maybe<Skills>>>;
  matchPercentage?: Maybe<Scalars['Float']>;
  member?: Maybe<Members>;
};

export type Match_ProjectToUserInput = {
  memberID?: InputMaybe<Scalars['ID']>;
  projectID?: InputMaybe<Scalars['ID']>;
  roleID?: InputMaybe<Scalars['ID']>;
  serverID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NetworkInput = {
  endorcment?: InputMaybe<Array<InputMaybe<EndorcmentInput>>>;
  memberID?: InputMaybe<Scalars['ID']>;
};

export type NewTweetProjectInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  author?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  projectID?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export enum PhaseType {
  Committed = 'committed',
  Engaged = 'engaged',
  Rejected = 'rejected',
  Shortlisted = 'shortlisted'
}

export type PreviusProjectsInput = {
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  positionName?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PreviusProjectsType = {
  __typename?: 'previusProjectsType';
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  positionName?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ProjectMatchType = {
  __typename?: 'projectMatchType';
  matchPercentage?: Maybe<Scalars['Float']>;
  projectData?: Maybe<Project>;
  role?: Maybe<RoleType>;
};

export type ProjectMemberType = {
  __typename?: 'projectMemberType';
  champion?: Maybe<Scalars['Boolean']>;
  favorite?: Maybe<Scalars['Boolean']>;
  info?: Maybe<Project>;
  phase?: Maybe<PhaseType>;
  role?: Maybe<RoleType>;
};

export type ProjectUserMatchType = {
  __typename?: 'projectUserMatchType';
  matchPercentage?: Maybe<Scalars['Float']>;
  projectData?: Maybe<Project>;
  skillsDontMatch?: Maybe<Array<Maybe<Skills>>>;
  skillsMatch?: Maybe<Array<Maybe<Skills>>>;
};

export type RoleInput = {
  _id?: InputMaybe<Scalars['ID']>;
  archive?: InputMaybe<Scalars['Boolean']>;
  budget?: InputMaybe<BudgetInput>;
  dateRangeEnd?: InputMaybe<Scalars['String']>;
  dateRangeStart?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hoursPerWeek?: InputMaybe<Scalars['Int']>;
  skills?: InputMaybe<Array<InputMaybe<SkillRoleInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type RoleType = {
  __typename?: 'roleType';
  _id?: Maybe<Scalars['ID']>;
  archive?: Maybe<Scalars['Boolean']>;
  budget?: Maybe<BudgetType>;
  dateRangeEnd?: Maybe<Scalars['String']>;
  dateRangeStart?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  hoursPerWeek?: Maybe<Scalars['Int']>;
  skills?: Maybe<Array<Maybe<SkillRoleType>>>;
  title?: Maybe<Scalars['String']>;
};

export type SkillInput_Member = {
  id?: InputMaybe<Scalars['ID']>;
  level?: InputMaybe<LevelEnum>;
};

export type SkillRoleInput = {
  _id?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['String']>;
  numEndorsement?: InputMaybe<Scalars['String']>;
};

export type SkillRoleType = {
  __typename?: 'skillRoleType';
  comment?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
  numEndorsement?: Maybe<Scalars['String']>;
  skillData?: Maybe<Skills>;
};

export type SkillType_Member = {
  __typename?: 'skillType_member';
  author?: Maybe<Members>;
  level?: Maybe<LevelEnum>;
  skillInfo?: Maybe<Skills>;
};

export type SkillsType = {
  __typename?: 'skillsType';
  authors?: Maybe<Array<Maybe<Members>>>;
  id?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Float']>;
};

export type SkillsTypeRole = {
  __typename?: 'skillsTypeRole';
  skill?: Maybe<Scalars['String']>;
};

export type SkillsUpdateMemberInput = {
  authors?: InputMaybe<Scalars['String']>;
  communityLevel?: InputMaybe<Scalars['Float']>;
  selfEndorsedLevel?: InputMaybe<Scalars['Float']>;
  skillID?: InputMaybe<Scalars['ID']>;
};

export type TeamInput = {
  memberID?: InputMaybe<Scalars['String']>;
  phase?: InputMaybe<PhaseType>;
  roleID?: InputMaybe<Scalars['String']>;
};

export type TeamType = {
  __typename?: 'teamType';
  memberInfo?: Maybe<Members>;
  phase?: Maybe<PhaseType>;
  roleID?: Maybe<Scalars['String']>;
};

export type TeamsType = {
  __typename?: 'teamsType';
  announcement?: Maybe<Array<Maybe<ProjectUpdate>>>;
  teamData?: Maybe<Team>;
};

export type TweetsInput = {
  author?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
};

export type TweetsProject = {
  __typename?: 'tweetsProject';
  newTweetID?: Maybe<Scalars['ID']>;
  numTweets?: Maybe<Scalars['Int']>;
  tweets?: Maybe<Array<Maybe<TweetsType>>>;
};

export type TweetsType = {
  __typename?: 'tweetsType';
  _id?: Maybe<Scalars['ID']>;
  approved?: Maybe<Scalars['Boolean']>;
  author?: Maybe<Members>;
  content?: Maybe<Scalars['String']>;
  registeredAt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateMemberInput = {
  _id?: InputMaybe<Scalars['ID']>;
  bio?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<ContentInput>;
  discordAvatar?: InputMaybe<Scalars['String']>;
  discordName?: InputMaybe<Scalars['String']>;
  discriminator?: InputMaybe<Scalars['String']>;
  hoursPerWeek?: InputMaybe<Scalars['Float']>;
  interest?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Array<InputMaybe<LinkInput>>>;
  previusProjects?: InputMaybe<Array<InputMaybe<PreviusProjectsInput>>>;
  serverID?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Array<InputMaybe<SkillInput_Member>>>;
  timeZone?: InputMaybe<Scalars['String']>;
};

export type UpdateProjectInput = {
  _id?: InputMaybe<Scalars['ID']>;
  budget?: InputMaybe<BudgetInput>;
  champion?: InputMaybe<Scalars['String']>;
  collaborationLinks?: InputMaybe<Array<InputMaybe<CollaborationLinksInput>>>;
  dates?: InputMaybe<DatesInput>;
  description?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Array<InputMaybe<RoleInput>>>;
  serverID?: InputMaybe<Scalars['String']>;
  stepsJoinProject?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  team?: InputMaybe<Array<InputMaybe<TeamInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateServerInput = {
  _id?: InputMaybe<Scalars['ID']>;
  adminCommands?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  adminID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  adminRoles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateSkillCategoryInput = {
  _id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FindMembersQueryVariables = Exact<{
  fields?: InputMaybe<FindMembersInput>;
}>;


export type FindMembersQuery = { __typename?: 'Query', findMembers?: Array<{ __typename?: 'Members', _id?: string | null, discordName?: string | null, discordAvatar?: string | null, skills?: Array<{ __typename?: 'skillType_member', level?: LevelEnum | null, skillInfo?: { __typename?: 'Skills', _id?: string | null } | null } | null> | null } | null> | null };

export type FindProjectsUpdateQueryVariables = Exact<{
  fields?: InputMaybe<FindProjectUpdatesInput>;
}>;


export type FindProjectsUpdateQuery = { __typename?: 'Query', findProjectUpdates?: Array<{ __typename?: 'ProjectUpdate', _id?: string | null, title?: string | null, content?: string | null, registeredAt?: string | null, members?: Array<{ __typename?: 'Members', _id?: string | null, discordName?: string | null, discordAvatar?: string | null } | null> | null, projects?: { __typename?: 'Project', _id?: string | null, title?: string | null } | null, team?: Array<{ __typename?: 'Team', _id?: string | null, name?: string | null } | null> | null } | null> | null };

export type FindProjectsQueryVariables = Exact<{
  fields?: InputMaybe<FindProjectsInput>;
}>;


export type FindProjectsQuery = { __typename?: 'Query', findProjects?: Array<{ __typename?: 'Project', _id?: string | null, title?: string | null, description?: string | null } | null> | null };

export type FindTeamsQueryVariables = Exact<{
  fields?: InputMaybe<FindTeamsInput>;
}>;


export type FindTeamsQuery = { __typename?: 'Query', findTeams?: Array<{ __typename?: 'Team', _id?: string | null, name?: string | null } | null> | null };


export const FindMembersDocument = gql`
    query FindMembers($fields: findMembersInput) {
  findMembers(fields: $fields) {
    _id
    discordName
    discordAvatar
    skills {
      level
      skillInfo {
        _id
      }
    }
  }
}
    `;

/**
 * __useFindMembersQuery__
 *
 * To run a query within a React component, call `useFindMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMembersQuery({
 *   variables: {
 *      fields: // value for 'fields'
 *   },
 * });
 */
export function useFindMembersQuery(baseOptions?: Apollo.QueryHookOptions<FindMembersQuery, FindMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMembersQuery, FindMembersQueryVariables>(FindMembersDocument, options);
      }
export function useFindMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMembersQuery, FindMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMembersQuery, FindMembersQueryVariables>(FindMembersDocument, options);
        }
export type FindMembersQueryHookResult = ReturnType<typeof useFindMembersQuery>;
export type FindMembersLazyQueryHookResult = ReturnType<typeof useFindMembersLazyQuery>;
export type FindMembersQueryResult = Apollo.QueryResult<FindMembersQuery, FindMembersQueryVariables>;
export const FindProjectsUpdateDocument = gql`
    query FindProjectsUpdate($fields: findProjectUpdatesINPUT) {
  findProjectUpdates(fields: $fields) {
    _id
    title
    content
    registeredAt
    members {
      _id
      discordName
      discordAvatar
    }
    projects {
      _id
      title
    }
    team {
      _id
      name
    }
  }
}
    `;

/**
 * __useFindProjectsUpdateQuery__
 *
 * To run a query within a React component, call `useFindProjectsUpdateQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProjectsUpdateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProjectsUpdateQuery({
 *   variables: {
 *      fields: // value for 'fields'
 *   },
 * });
 */
export function useFindProjectsUpdateQuery(baseOptions?: Apollo.QueryHookOptions<FindProjectsUpdateQuery, FindProjectsUpdateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindProjectsUpdateQuery, FindProjectsUpdateQueryVariables>(FindProjectsUpdateDocument, options);
      }
export function useFindProjectsUpdateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProjectsUpdateQuery, FindProjectsUpdateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindProjectsUpdateQuery, FindProjectsUpdateQueryVariables>(FindProjectsUpdateDocument, options);
        }
export type FindProjectsUpdateQueryHookResult = ReturnType<typeof useFindProjectsUpdateQuery>;
export type FindProjectsUpdateLazyQueryHookResult = ReturnType<typeof useFindProjectsUpdateLazyQuery>;
export type FindProjectsUpdateQueryResult = Apollo.QueryResult<FindProjectsUpdateQuery, FindProjectsUpdateQueryVariables>;
export const FindProjectsDocument = gql`
    query FindProjects($fields: findProjectsInput) {
  findProjects(fields: $fields) {
    _id
    title
    description
  }
}
    `;

/**
 * __useFindProjectsQuery__
 *
 * To run a query within a React component, call `useFindProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProjectsQuery({
 *   variables: {
 *      fields: // value for 'fields'
 *   },
 * });
 */
export function useFindProjectsQuery(baseOptions?: Apollo.QueryHookOptions<FindProjectsQuery, FindProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindProjectsQuery, FindProjectsQueryVariables>(FindProjectsDocument, options);
      }
export function useFindProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProjectsQuery, FindProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindProjectsQuery, FindProjectsQueryVariables>(FindProjectsDocument, options);
        }
export type FindProjectsQueryHookResult = ReturnType<typeof useFindProjectsQuery>;
export type FindProjectsLazyQueryHookResult = ReturnType<typeof useFindProjectsLazyQuery>;
export type FindProjectsQueryResult = Apollo.QueryResult<FindProjectsQuery, FindProjectsQueryVariables>;
export const FindTeamsDocument = gql`
    query FindTeams($fields: findTeamsInput) {
  findTeams(fields: $fields) {
    _id
    name
  }
}
    `;

/**
 * __useFindTeamsQuery__
 *
 * To run a query within a React component, call `useFindTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTeamsQuery({
 *   variables: {
 *      fields: // value for 'fields'
 *   },
 * });
 */
export function useFindTeamsQuery(baseOptions?: Apollo.QueryHookOptions<FindTeamsQuery, FindTeamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTeamsQuery, FindTeamsQueryVariables>(FindTeamsDocument, options);
      }
export function useFindTeamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTeamsQuery, FindTeamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTeamsQuery, FindTeamsQueryVariables>(FindTeamsDocument, options);
        }
export type FindTeamsQueryHookResult = ReturnType<typeof useFindTeamsQuery>;
export type FindTeamsLazyQueryHookResult = ReturnType<typeof useFindTeamsLazyQuery>;
export type FindTeamsQueryResult = Apollo.QueryResult<FindTeamsQuery, FindTeamsQueryVariables>;