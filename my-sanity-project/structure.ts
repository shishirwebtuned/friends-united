import { StructureResolver } from 'sanity/structure'
import {
  Users,
  Settings,
  FileText,
  MessageSquare,
  Trophy,
  Shield,
  BookOpen,
  Layout,
  HelpCircle,
  Megaphone,
} from 'lucide-react'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Friends United Dashboard')
    .items([
      // Website Settings Section
      S.listItem()
        .title('⚙️ Website Settings')
        .icon(Settings)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('General Settings')
                .icon(Settings)
                .child(S.document().schemaType('setting').documentId('settings')),
              S.listItem()
                .title('Banner')
                .icon(Layout)
                .child(S.documentTypeList('bannerData').title('Banner')),
            ])
        ),

      S.divider(),

      // Content Management Section
      S.listItem()
        .title('📝 Content Management')
        .icon(FileText)
        .child(
          S.list()
            .title('Content')
            .items([
              S.listItem()
                .title('Our Story')
                .icon(BookOpen)
                .child(S.documentTypeList('ourstory').title('Our Story')),
              S.listItem()
                .title('The Fight')
                .icon(Shield)
                .child(S.documentTypeList('theFight').title('The Fight')),
              S.listItem()
                .title('Services')
                .icon(Megaphone)
                .child(S.documentTypeList('services').title('Services')),
              S.listItem()
                .title('United Voices')
                .icon(Users)
                .child(S.documentTypeList('unitedVoices').title('United Voices')),
              S.listItem()
                .title('Blog Posts')
                .icon(FileText)
                .child(S.documentTypeList('post').title('Blog Posts')),
            ])
        ),

      S.divider(),

      // Success Stories Section
      S.listItem()
        .title('🏆 Success Stories')
        .icon(Trophy)
        .child(
          S.list()
            .title('Success Stories')
            .items([
              S.listItem()
                .title('Real Winners')
                .icon(Trophy)
                .child(S.documentTypeList('realWinners').title('Real Winners')),
            ])
        ),

      S.divider(),

      // Legal & Support Section
      S.listItem()
        .title('📋 Legal & Support')
        .icon(HelpCircle)
        .child(
          S.list()
            .title('Legal & Support')
            .items([
              S.listItem()
                .title('Contracts')
                .icon(FileText)
                .child(S.documentTypeList('contact').title('Contracts')),
              S.listItem()
                .title('FAQs')
                .icon(HelpCircle)
                .child(S.documentTypeList('faq').title('FAQs')),
            ])
        ),
    ])
