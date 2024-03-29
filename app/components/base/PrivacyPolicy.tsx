import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="p-8 bg-white rounded-sm">
      <div className='text-sm md:text-md'>
        <h1 className='text-xl font-bold mb-1'>プライバシーポリシー</h1>
        <p> sales buddy（以下，「当運営者」といいます。）は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。</p>

        <h2 className='text-lg mt-5'>第1条（個人情報）</h2>
        <p>「個人情報」とは、個人情報保護法にいう「個人情報」を指し、生存する個人に関する情報であって、LINEログインを通じて取得した情報（例：LINEアカウントに紐づくアカウント名、プロフィール画像など）により特定の個人を識別できる情報を指します。</p>

        <h2 className='text-lg mt-2'>第2条（個人情報の収集方法）</h2>
        <p>当運営者は、ユーザーがLINEログインを通じてサービスへの登録をする際に、LINEアカウントから提供される情報（例：アカウント名、プロフィール画像など）を収集します。当運営者はこれらの情報をユーザーの同意に基づき取得し、本サービスの提供、改善、ユーザーからの問い合わせ対応などの目的でのみ使用します。</p>

        <h2 className='text-lg mt-2'>第3条（個人情報を収集・利用する目的）</h2>
        <p>当運営者が個人情報を収集・利用する目的は，以下のとおりです。</p>
        <ol className='mt-1'>
          <li>1. 当サービスの提供・運営のため</li>
          <li>2. 通知設定をONにしたユーザーへのリマインダー通知の送信のため。</li>
          <li>3. 上記の利用目的に付随する目的</li>
        </ol>

        <h2 className='text-lg mt-2'>第4条（利用目的の変更）</h2>
        <ol>
          <li>1. 当運営者は，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。</li>
          <li>2. 利用目的の変更を行った場合には，変更後の目的について本ウェブサイト上に公表するものとします。</li>
        </ol>

        <h2 className='text-lg mt-2'>第5条（個人情報の第三者提供）</h2>
        <p>当運営者は、以下に該当する場合を除き、ユーザーの個人情報を第三者に提供することはありません</p>
        <ol className='my-1'>
          <li>1. 人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき。</li>
          <li>2. 公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき。</li>
          <li>3. 国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき。</li>
        </ol>
        <p>当運営者は、利用目的の達成に必要な範囲内で個人情報の取扱いの全部または一部を委託する場合にのみ、必要最小限の情報を委託先に提供することがあります。また、合併その他の事由による事業の承継に伴い個人情報が提供される場合には、事前に通知または公表を行います。</p>

        <h2 className='text-lg mt-2'>第6条（個人情報の開示）</h2>
        <ol>
          <li>1. 当運営者は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、以下の場合は、その全部または一部を開示しないことがあります</li>
          <ol className='ml-3'>
            <li>a. 本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合。</li>
            <li>b. 当運営者の業務の適正な実施に著しい支障を及ぼすおそれがある場合。</li>
            <li>c. その他法令に違反することとなる場合。</li>
          </ol>
          <li>2. 開示しない決定をした場合には、その旨を遅滞なく本人に通知します。</li>
          <li>3. 当運営者は、個人情報の開示に関して、原則として手数料は申し受けません。</li>
        </ol>

        <h2 className='text-lg mt-2'>第7条（個人情報の訂正および削除）</h2>
        <ol>
          <li>1. 当運営者は、ユーザーがLINEアカウント経由で提供した個人情報に基づいてサービスを提供しています。ユーザーが自己の個人情報の訂正を希望する場合は、LINEプラットフォーム上でこれらの変更を行う必要があります。</li>
          <li>2. 当運営者は、LINEから提供された情報に基づいてサービスを運営しており、ユーザーの個人情報の訂正について直接の介入を行いません。</li>
          <li>3. ユーザーがLINEアカウント情報の変更を行った場合、当運営者はこれらの変更を受け入れ、サービスの提供を継続します。</li>
        </ol>

        <h2 className='text-lg mt-2'>第8条（個人情報の利用停止等）</h2>
        <ol>
          <li>1. 当運営者は，本人から個人情報が利用目的の範囲を超えて取り扱われているという理由，または不正の手段により取得されたものであるという理由により，その利用の停止または消去（以下，「利用停止等」といいます。）を求められた場合には，遅滞なく必要な調査を行います。</li>
          <li>2. 前項の調査結果に基づき，その請求に応じる必要があると判断した場合には，遅滞なく，当該個人情報の利用停止等を行います。</li>
          <li>3. 当運営者は，前項の規定に基づき利用停止等を行った場合，または利用停止等を行わない旨の決定をしたときは，遅滞なく，これをユーザーに通知します。</li>
          <li>4. 前2項にかかわらず，利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって，ユーザーの権利利益を保護するために必要なこれに代わるべき措置をとれる場合は，この代替策を講じるものとします。</li>
        </ol>

        <h2 className='text-lg mt-2'>第9条（プライバシーポリシーの変更）</h2>
        <ol>
          <li>1. 本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。</li>
          <li>2. 当サービスが別途定める場合を除いて，変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。</li>
        </ol>

        <h2 className='text-lg mt-2'>第10条（お問い合わせ窓口）</h2>
        <p className='mb-1'>本ポリシーに関するお問い合わせは，下記の窓口までお願いいたします。</p>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSelZ0KYUju7cveV32wRg-IHfzDjYK4Utv708s3-F7k36C-gTQ/viewform?usp=sf_link" className="underline text-sky-800">お問い合わせフォーム</Link>
        <p className="mt-2 text-right">以上</p>
      </div>
    </div>
  )
}
